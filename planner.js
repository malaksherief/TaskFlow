'use strict';

const Planner = (() => {
  const storageKey = 'taskflow.creative-planner.v1';
  const duration = 25 * 60 * 1000;
  const statuses = ['todo', 'doing', 'done'];
  const priorities = ['high', 'medium', 'low'];
  const categories = ['work', 'design', 'study', 'personal'];
  const dayKey = (date = new Date()) => {
    const part = value => String(value).padStart(2, '0');
    return `${String(date.getFullYear()).padStart(4, '0')}-${part(date.getMonth() + 1)}-${part(date.getDate())}`;
  };
  const fromKey = key => new Date(`${key}T12:00:00`);
  const offsetDay = (date, offset) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + offset, 12);
  const id = () => globalThis.crypto?.randomUUID?.() ?? `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  const resetTimer = () => ({ remaining: duration, endsAt: null });
  const remainingTime = (timer, now = Date.now()) => timer.endsAt === null ? timer.remaining : Math.max(0, timer.endsAt - now);
  const isOverdue = (task, today) => task.status !== 'done' && Boolean(task.due) && task.due < today;
  const topIds = (data, today) => data.top.date === today ? data.top.ids : [];
  const blank = () => ({ version: 1, language: 'en', categories: [], tasks: [], top: { date: dayKey(), ids: [] }, timer: resetTimer() });

  function sample(date = new Date()) {
    const data = blank();
    const key = offset => dayKey(offsetDay(date, offset));
    const examples = [
      ['Polish the portfolio homepage', 'رتّب الصفحة الرئيسية لمعرض الأعمال', 'design', 'high', 'done', 0, false, 0],
      ['Sketch the next collection', 'ارسم مسودّة المجموعة القادمة', 'design', 'high', 'doing', 0],
      ['Review chapter three notes', 'راجع ملاحظات الفصل الثالث', 'study', 'medium', 'todo', 0],
      ['Send the project brief', 'أرسل موجز المشروع', 'work', 'high', 'todo', -1],
      ['Plan meals for next week', 'خطّط وجبات الأسبوع القادم', 'personal', 'low', 'todo', 3],
      ['Collect references for moodboard', 'اجمع مراجع لوحة الإلهام', 'design', 'medium', 'doing', 2],
      ['Outline the November newsletter', 'ضع مخطط نشرة نوفمبر', 'work', 'medium', 'doing', 5],
      ['Organize the project files', 'نظّم ملفات المشروع', 'work', 'low', 'done', -2, false, -2],
      ['Finish the reading list', 'أكمل قائمة القراءة', 'study', 'low', 'done', -3, false, -3],
      ['Send the color palette', 'أرسل لوحة الألوان', 'design', 'high', 'done', -2, false, -2],
      ['Book a library session', 'احجز جلسة في المكتبة', 'study', 'low', 'done', -5, false, -5],
      ['Save references for the moodboard', 'احفظ مراجع لوحة الإلهام', 'design', 'medium', 'todo', null, true],
      ['Reply to the studio email', 'رُد على رسالة الاستوديو', 'work', 'high', 'todo', -2, true],
      ['Look up weekend workshops', 'ابحث عن ورش عطلة الأسبوع', 'personal', 'low', 'todo', null, true],
      ['Sort through bookmarked articles', 'رتّب المقالات المحفوظة', 'study', 'low', 'todo', null, true],
      ['Update the project checklist', 'حدّث قائمة خطوات المشروع', 'work', 'medium', 'done', -1, false, -1]
    ];
    data.tasks = examples.map(([title, arabic, category, priority, status, due, inbox = false, completed = null], index) => ({
      id: `sample-${index + 1}`, title, arabic, category, priority, status, inbox, notes: '',
      due: due === null ? '' : key(due), completedAt: completed === null ? null : offsetDay(date, completed).toISOString()
    }));
    data.top = { date: key(0), ids: data.tasks.slice(0, 3).map(task => task.id) };
    return data;
  }

  function setStatus(task, status, now = new Date()) {
    return {
      ...task, status, inbox: status === 'todo' && task.inbox,
      completedAt: status === 'done' ? task.completedAt ?? now.toISOString() : null
    };
  }

  function stats(tasks, today) {
    return tasks.reduce((counts, task) => {
      counts[task.status] += 1;
      counts.overdue += Number(isOverdue(task, today));
      return counts;
    }, { total: tasks.length, done: 0, doing: 0, todo: 0, overdue: 0 });
  }

  function week(tasks, date) {
    const dates = Array.from({ length: 7 }, (_, index) => dayKey(offsetDay(date, index - 6)));
    const counts = new Map(dates.map(key => [key, 0]));
    for (const task of tasks) {
      if (task.status !== 'done' || !task.completedAt) continue;
      const key = dayKey(new Date(task.completedAt));
      if (counts.has(key)) counts.set(key, counts.get(key) + 1);
    }
    return [...counts];
  }

  function validate(data) {
    const is = (value, length) => typeof value === 'string' && value.length <= length;
    const date = value => is(value, 10) && /^\d{4}-\d{2}-\d{2}$/.test(value) && dayKey(fromKey(value)) === value;
    const assert = condition => { if (!condition) throw new Error('Invalid planner data'); };
    assert(data && data.version === 1 && ['en', 'ar'].includes(data.language));
    assert(Array.isArray(data.categories) && Array.isArray(data.tasks));
    const categoryIds = new Set(categories);
    const custom = data.categories.map(item => {
      assert(item && is(item.id, 100) && !['all', 'none', ''].includes(item.id) && !categoryIds.has(item.id) && is(item.name, 35) && item.name.trim());
      categoryIds.add(item.id);
      return { id: item.id, name: item.name.trim() };
    });
    const taskIds = new Set();
    const tasks = data.tasks.map(task => {
      assert(task && is(task.id, 100) && task.id && !taskIds.has(task.id));
      assert(is(task.title, 160) && task.title.trim() && is(task.notes, 2000));
      assert(task.arabic === undefined || (is(task.arabic, 160) && task.arabic.trim()));
      assert(task.category === '' || categoryIds.has(task.category));
      assert(statuses.includes(task.status) && priorities.includes(task.priority) && typeof task.inbox === 'boolean');
      assert(!task.inbox || task.status === 'todo');
      assert(task.due === '' || date(task.due));
      assert(task.completedAt === null || (task.status === 'done' && is(task.completedAt, 30) && Number.isFinite(Date.parse(task.completedAt))));
      taskIds.add(task.id);
      const { id, title, arabic, category, priority, status, inbox, notes, due, completedAt } = task;
      return { id, title: title.trim(), ...(arabic ? { arabic: arabic.trim() } : {}), category, priority, status, inbox, notes, due, completedAt };
    });
    const { top, timer } = data;
    assert(top && date(top.date) && Array.isArray(top.ids) && top.ids.length <= 3 && new Set(top.ids).size === top.ids.length);
    const boardIds = new Set(tasks.filter(task => !task.inbox).map(task => task.id));
    assert(top.ids.every(taskId => boardIds.has(taskId)));
    assert(timer && Number.isInteger(timer.remaining) && timer.remaining >= 0 && timer.remaining <= duration);
    assert(timer.endsAt === null || (Number.isSafeInteger(timer.endsAt) && timer.endsAt > 0));
    return { version: 1, language: data.language, categories: custom, tasks, top: { date: top.date, ids: [...top.ids] }, timer: { remaining: timer.remaining, endsAt: timer.endsAt } };
  }

  return { storageKey, duration, statuses, priorities, categories, dayKey, fromKey, offsetDay, id, resetTimer, remainingTime, isOverdue, topIds, blank, sample, setStatus, stats, week, validate };
})();
