'use strict';

const icons = {
  logo: '<path d="M20 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11"/><path class="logo-check" d="m7 12 4 4L22 5"/>',
  dashboard: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  tasks: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="m8 12 3 3 5-6"/>',
  inbox: '<path d="M4 13 7 5h10l3 8v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="M4 13h5l1.5 2h3l1.5-2h5"/>',
  board: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16m6-16v16"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18m-13 4h.01m4 0h.01m4 0h.01m-8 3h.01m4 0h.01"/>',
  focus: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 1m-4-12h4m-2 0v3m6 2 1-1"/>',
  analytics: '<path d="M4 4v16h17M8 16v-4m5 4V7m5 9V4"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="m10 3-.6 2.3-2.1 1.2-2.3-.7-2 3.4 1.7 1.7v2.2L3 14.8l2 3.4 2.3-.7 2.1 1.2L10 21h4l.6-2.3 2.1-1.2 2.3.7 2-3.4-1.7-1.7v-2.2L21 9.2l-2-3.4-2.3.7-2.1-1.2L14 3z"/>',
  total: '<rect x="5" y="5" width="14" height="16" rx="2"/><rect x="9" y="3" width="6" height="4" rx="1" fill="var(--icon-fill,none)"/><path d="m9 14 2 2 4-5"/>',
  done: '<circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5 5.5-5.5"/>',
  doing: '<path d="M20 7v5h-5M4 17v-5h5m-4-2a7 7 0 0 1 12-4l3 4m-16 4 3 4a7 7 0 0 0 12-4"/>',
  overdue: '<path d="M10.3 4.5a2 2 0 0 1 3.4 0l7.5 13A2 2 0 0 1 19.5 20h-15a2 2 0 0 1-1.7-2.5zM12 9v4m0 3h.01"/>',
  todo: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2"/>',
  search: '<circle cx="10.5" cy="10.5" r="6"/><path d="m15 15 5 5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  x: '<path d="m6 6 12 12M18 6 6 18"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  globe: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
  pin: '<path d="M16 3v5l3 5v2H5v-2l3-5V3zm-4 12v6"/>',
  star: '<path d="m12 2 1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8z"/>',
  chevron: '<path d="m9 5 7 7-7 7"/>',
  play: '<path d="m8 5 12 7-12 7z" fill="currentColor" stroke-linejoin="round"/>',
  pause: '<path d="M9 5v14m6-14v14" stroke-width="3"/>',
  reset: '<path d="M4 4v6h6m-6 0a8 8 0 1 1 1 7"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4"/>',
  upload: '<path d="M12 16V4m-5 5 5-5 5 5M4 16v4h16v-4"/>',
  grip: '<path d="M9 5h.01M15 5h.01M9 12h.01m6 0h.01M9 19h.01m6 0h.01" stroke-width="3"/>',
  flag: '<path d="M5 21V4m0 1c5-4 9 4 14 0v10c-5 4-9-4-14 0"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3m3 0-1 13H7L6 7m4 4v5m4-5v5"/>',
  paperclip: '<path d="m9 14 6-8a2 2 0 0 1 3 2l-7 10a4 4 0 0 1-6-4L13 3a5 5 0 0 1 8 6l-8 11"/>',
  crown: '<path d="m3 8 4.5 4 4.5-7 4.5 7L21 8l-2 11H5zm2 14h14M3 5h.01M12 2h.01M21 5h.01"/>'
};

const icon = (name, className = '') => `<svg class="icon ${className}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] ?? ''}</svg>`;
const escapeHTML = text => String(text).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const byId = id => document.getElementById(id);
const sidebar = byId('sidebar');
const main = byId('main-content');
const toolbar = byId('toolbar');
const dialog = byId('dialog');
const backupFile = byId('backup-file');
const toast = byId('toast');
const routes = ['dashboard', 'tasks', 'inbox', 'board', 'calendar', 'focus', 'analytics', 'settings'];
const getRoute = () => routes.includes(location.hash.slice(1)) ? location.hash.slice(1) : 'dashboard';
let view = getRoute();
let storageFailed = false;
let state = load();
let currentDay = Planner.dayKey();
let month = Planner.fromKey(currentDay);
let selectedDate = currentDay;
let mobileMenu = false;
let query = '';
let filters = defaultFilters();
let toastTimeout;
let dialogReturn;
let confirmAction;
let dragId;
let pointerDrag;
let ignoreClickUntil = 0;

function load() {
  try {
    const raw = localStorage.getItem(Planner.storageKey);
    if (raw) return Planner.validate(JSON.parse(raw));
    const data = Planner.sample();
    localStorage.setItem(Planner.storageKey, JSON.stringify(data));
    return data;
  } catch {
    storageFailed = true;
    return Planner.sample();
  }
}

function persist() {
  try {
    localStorage.setItem(Planner.storageKey, JSON.stringify(state));
    storageFailed = false;
  } catch {
    storageFailed = true;
  }
}

function say(key, values) {
  clearTimeout(toastTimeout);
  toast.textContent = t(key, values);
  toast.classList.add('visible');
  toastTimeout = setTimeout(() => toast.classList.remove('visible'), 4200);
}

function t(key, values = {}) {
  return STRINGS[state.language][key].replace(/\{(\w+)\}/g, (_, name) => values[name] ?? '');
}

const locale = () => state.language === 'ar' ? 'ar-EG' : 'en-US';
const num = number => new Intl.NumberFormat(locale()).format(number);
const percent = number => new Intl.NumberFormat(locale(), { style: 'percent' }).format(number / 100);
const dateText = (date, options) => new Intl.DateTimeFormat(locale(), options).format(typeof date === 'string' ? Planner.fromKey(date) : date);
const shortDate = date => dateText(date, { month: 'short', day: 'numeric' });
const titleOf = task => state.language === 'ar' && task.arabic ? task.arabic : task.title;
const textHTML = value => `<bdi>${escapeHTML(value)}</bdi>`;
const taskName = task => textHTML(titleOf(task));
const categoryName = id => Planner.categories.includes(id) ? t(id) : state.categories.find(item => item.id === id)?.name ?? t('none');
const categoryStyle = id => Planner.categories.includes(id) ? id : id ? 'custom' : 'none';
const statusName = status => t(status === 'done' ? 'doneBoard' : status);
const taskById = id => state.tasks.find(task => task.id === id);
const inboxTasks = () => state.tasks.filter(task => task.inbox);
const topTasks = () => Planner.topIds(state, currentDay).map(taskById).filter(Boolean);
const allCategories = () => [...Planner.categories, ...state.categories.map(item => item.id)];
const empty = key => `<p class="empty-state">${t(key)}</p>`;

function button(action, label, symbol, options = {}) {
  const { classes = 'button secondary', id = '', iconOnly = false, extra = '' } = options;
  return `<button type="button" class="${classes}" data-action="${action}"${id ? ` data-id="${escapeHTML(id)}"` : ''}${iconOnly ? ` aria-label="${escapeHTML(label)}" title="${escapeHTML(label)}"` : ''}${extra ? ` ${extra}` : ''}>${symbol ? icon(symbol) : ''}${iconOnly ? '' : `<span>${escapeHTML(label)}</span>`}</button>`;
}

function pageLink(route, label, classes = 'text-link', symbol) {
  return `<a href="#${route}" class="${classes}" data-action="navigate" data-id="${route}"><span>${t(label)}</span>${symbol ? icon(symbol) : ''}</a>`;
}

function select(name, label, entries, value, classes = '') {
  return `<select class="${classes}" name="${name}" aria-label="${t(label)}">${entries.map(([key, text]) => `<option value="${escapeHTML(key)}"${value === key ? ' selected' : ''}>${escapeHTML(text)}</option>`).join('')}</select>`;
}

function defaultFilters() {
  return { category: 'all', priority: 'all', status: 'all', date: 'all' };
}

function categoryEntries() {
  return allCategories().map(id => [id, categoryName(id)]);
}

function setView(route, nextFilters = null, keepQuery = false, focusMain = true) {
  if (!keepQuery) query = '';
  filters = nextFilters ?? defaultFilters();
  const changed = view !== route;
  view = route;
  if (getRoute() !== route) history.pushState(null, '', `#${route}`);
  mobileMenu = false;
  render();
  if (changed) window.scrollTo(0, 0);
  if (focusMain) main.focus({ preventScroll: true });
}

function renderSidebar() {
  const inboxCount = inboxTasks().length;
  sidebar.setAttribute('aria-label', t('navigate'));
  sidebar.innerHTML = `
    <a class="brand" href="#dashboard" data-action="navigate" data-id="dashboard">
      <span class="brand-mark">${icon('logo')}</span><span><strong>Task<span>Flow</span></strong><small>${t('creative')}</small></span>
    </a>
    <nav aria-label="${t('workspace')}">
      <p class="sidebar-label">${t('workspace')}</p>
      ${routes.map(route => `<a class="nav-link${view === route ? ' active' : ''}" href="#${route}" data-action="navigate" data-id="${route}"${view === route ? ' aria-current="page"' : ''}>${icon(route)}<span>${t(route)}</span>${route === 'inbox' && inboxCount ? `<span class="nav-count">${num(inboxCount)}</span>` : ''}</a>`).join('')}
    </nav>
    <section class="sidebar-categories" aria-labelledby="categories-title">
      <div class="sidebar-heading"><h2 id="categories-title" class="sidebar-label">${t('categories')}</h2>${button('category-add', t('addCategory'), 'plus', { classes: 'sidebar-add', iconOnly: true })}</div>
      ${allCategories().map(id => `<button type="button" class="category-link" data-action="category" data-id="${escapeHTML(id)}"${view === 'tasks' && filters.category === id ? ' aria-pressed="true"' : ' aria-pressed="false"'}><span class="category-dot ${categoryStyle(id)}"></span>${textHTML(categoryName(id))}</button>`).join('')}
    </section>
    <div class="sidebar-scrap" aria-hidden="true"><div class="scrap-note"><span>${t('noteFirst')}<br>${t('noteSecond')}</span></div><img src="assets/pressed-flowers.png" width="76" height="114" alt=""></div>`;
}

function renderToolbar() {
  toolbar.innerHTML = `
    ${button('menu', t(mobileMenu ? 'closeMenu' : 'menu'), mobileMenu ? 'x' : 'menu', { classes: 'icon-button menu-button', iconOnly: true, extra: `aria-expanded="${mobileMenu}" aria-controls="sidebar"` })}
    <a class="mobile-brand" dir="ltr" href="#dashboard" data-action="navigate" data-id="dashboard">${icon('logo')}<strong>Task<span>Flow</span></strong></a>
    <div class="search-box">${icon('search')}<input id="global-search" type="search" value="${escapeHTML(query)}" placeholder="${t('search')}" aria-label="${t('emptyQuery')}" autocomplete="off" dir="auto">${button('clear-search', t('clearSearch'), 'x', { classes: 'clear-search', iconOnly: true, extra: query ? '' : 'hidden' })}</div>
    ${button('language', t('shortLang'), 'globe', { classes: 'button language-button', extra: `aria-label="${t('switchLang')}" title="${t('switchLang')}"` })}
    ${button('new', t('newTask'), 'plus', { classes: 'button primary new-button', extra: `aria-label="${t('newTask')}"` })}`;
}

function dateHeading() {
  return `<div class="page-heading dashboard-heading"><p class="date-heading">${icon('calendar')}${dateText(currentDay, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</p><h1>${t('greeting')} <span class="heading-sparkles" aria-hidden="true">${icon('star')}${icon('star')}</span></h1></div>`;
}

function sectionHeading(key, action = '', symbol = key) {
  return `<div class="page-heading section-page-heading"><h1>${icon(symbol)}${t(key)}</h1>${action}</div>`;
}

function cardTitle(key, symbol, end = '') {
  return `<header class="card-heading"><h2>${symbol ? icon(symbol) : ''}${t(key)}</h2>${end}</header>`;
}

function statsCards() {
  const counts = Planner.stats(state.tasks, currentDay);
  return `<div class="stats-grid">${['total', 'done', 'doing', 'overdue'].map(key => `<button type="button" class="paper stat" data-action="stat" data-id="${key}"><span class="stat-icon ${key}">${icon(key)}</span><span class="stat-label"><span>${t(key)}</span><strong>${num(counts[key])}</strong></span></button>`).join('')}</div>`;
}

function badge(task) {
  return task.category ? `<span class="badge ${categoryStyle(task.category)}">${textHTML(categoryName(task.category))}</span>` : '';
}

function taskToggle(task) {
  const checked = task.status === 'done';
  const label = t(checked ? 'markUndone' : 'markDone');
  return `<button type="button" class="task-check${checked ? ' checked' : ''}" data-action="toggle" data-id="${escapeHTML(task.id)}" aria-pressed="${checked}" aria-label="${escapeHTML(`${label} • ${titleOf(task)}`)}">${icon('check')}</button>`;
}

function taskTitleButton(task) {
  return `<button type="button" class="task-title${task.status === 'done' ? ' completed' : ''}" data-action="edit" data-id="${escapeHTML(task.id)}" aria-label="${escapeHTML(t('editNamed', { name: titleOf(task) }))}">${taskName(task)}</button>`;
}

function taskLine(task, mode = '') {
  const id = task.id;
  const due = task.due ? `<time class="task-due${Planner.isOverdue(task, currentDay) ? ' late' : ''}" datetime="${task.due}">${icon('calendar')}${shortDate(task.due)}</time>` : '';
  const pinned = Planner.topIds(state, currentDay).includes(task.id);
  const pinAction = button('pin', t(pinned ? 'removeTop' : 'addTop'), 'pin', { classes: `icon-button row-action${pinned ? ' pinned' : ''}`, id, iconOnly: true });
  const priority = `<span class="priority ${task.priority}">${icon('flag')}${t(task.priority)}</span>`;
  const marking = mode === 'inbox-preview' || mode === 'inbox' ? `<span class="inbox-square" aria-hidden="true"></span>` : taskToggle(task);
  return `<li class="task-line ${mode}">${marking}<div class="task-copy">${taskTitleButton(task)}${mode === 'list' && task.notes ? `<p dir="auto">${escapeHTML(task.notes)}</p>` : ''}</div>${badge(task)}${mode === 'list' ? priority : ''}${['list', 'inbox', 'deadlines'].includes(mode) ? due : ''}${['inbox-preview', 'inbox', 'list'].includes(mode) ? pinAction : ''}${mode === 'inbox' ? button('move-inbox', t('moveBoard'), 'board', { classes: 'icon-button row-action', id, iconOnly: true }) : ''}</li>`;
}

function topCard() {
  const tasks = topTasks();
  return `<section class="paper top-card"><header class="card-heading"><h2 class="ribbon">${icon('star')}${t('top')}</h2>${icon('crown', 'crown-doodle')}</header>
    <div class="top-content">${tasks.length ? `<ul class="lined-list">${tasks.map(task => taskLine(task, 'top-line')).join('')}</ul>` : empty('noTop')}
    <div class="card-footer"><span>${t('topFilled', { n: num(tasks.length) })}</span>${button('top-picker', t('pickTop'), 'plus', { classes: 'text-link' })}</div></div></section>`;
}

function ring(value, label, segments = '') {
  return `<div class="progress-ring" style="--part:${value}%;${segments}" role="img" aria-label="${escapeHTML(label)}"><span>${percent(value)}</span></div>`;
}

function legend(key, count, css = key) {
  return `<li><span class="legend-dot ${css}"></span><span>${t(key)}</span><strong>${num(count)}</strong></li>`;
}

function todayCard() {
  const tasks = topTasks();
  const counts = Planner.stats(tasks, currentDay);
  const value = tasks.length ? Math.round(counts.done / tasks.length * 100) : 0;
  return `<section class="paper today-card"><span class="tape today-tape" aria-hidden="true"></span>${cardTitle('todayProgress')}
    <div class="today-chart">${ring(value, t('topProgress', { n: num(counts.done), total: num(tasks.length) }))}<ul class="legend">${legend('done', counts.done)}${legend('doing', counts.doing)}${legend('remaining', counts.todo, 'todo')}</ul></div>
    <p class="chart-caption">${t('topProgress', { n: num(counts.done), total: num(tasks.length) })}</p></section>`;
}

function captureForm() {
  return `<form class="capture-form" data-form="capture"><input type="text" name="title" maxlength="160" required placeholder="${t('quickAdd')}" aria-label="${t('quickAdd')}" autocomplete="off" dir="auto"><button type="submit" class="button primary capture-submit" aria-label="${t('addInbox')}" title="${t('addInbox')}">${icon('plus')}</button></form>`;
}

function inboxCard() {
  const tasks = inboxTasks();
  return `<section class="paper inbox-card"><span class="tape inbox-tape" aria-hidden="true"></span>${icon('paperclip', 'paperclip-doodle')}
    ${cardTitle('inbox', 'inbox', `<span class="count-pill">${num(tasks.length)}</span>`)}${tasks.length ? `<ul class="lined-list">${tasks.slice(0, 3).map(task => taskLine(task, 'inbox-preview')).join('')}</ul>` : empty('noInbox')}
    <div class="inbox-footer">${captureForm()}${pageLink('inbox', 'goInbox', 'text-link', 'chevron')}</div></section>`;
}

function filterTasks(tasks) {
  const needle = query.trim().toLocaleLowerCase(locale());
  return tasks.filter(task => {
    const matchesText = !needle || [titleOf(task), task.title, task.notes, categoryName(task.category)].some(text => text.toLocaleLowerCase(locale()).includes(needle));
    return matchesText && (filters.category === 'all' || task.category === filters.category) &&
      (filters.priority === 'all' || task.priority === filters.priority) &&
      (filters.status === 'all' || (filters.status === 'open' ? task.status !== 'done' : task.status === filters.status)) &&
      (filters.date === 'all' || (filters.date === 'overdue' ? Planner.isOverdue(task, currentDay) : task.due === currentDay));
  });
}

function categoryFilter() {
  return select('category', 'category', [['all', t('allCategories')], ...categoryEntries(), ['', t('none')]], filters.category);
}

function boardTask(task) {
  const due = task.due ? `<time class="task-due${Planner.isOverdue(task, currentDay) ? ' late' : ''}" datetime="${task.due}">${icon('calendar')}${shortDate(task.due)}</time>` : '';
  return `<li class="board-task" draggable="true" data-task="${escapeHTML(task.id)}"><div class="board-task-main">${taskToggle(task)}${taskTitleButton(task)}<span class="drag-grip" aria-hidden="true" title="${t('dragTask')}">${icon('grip')}</span></div><div class="board-meta">${badge(task)}${due || `<span class="priority ${task.priority}">${icon('flag')}${t(task.priority)}</span>`}</div></li>`;
}

function board(preview = false) {
  const tasks = filterTasks(state.tasks.filter(task => !task.inbox));
  const columns = Planner.statuses.map(status => {
    const matching = tasks.filter(task => task.status === status);
    const shown = preview ? matching.slice(0, 3) : matching;
    return `<section class="board-column ${status}" data-drop="${status}" aria-label="${statusName(status)}"><header><h3>${icon(status)}${statusName(status)} <span>${num(matching.length)}</span></h3>${button('new-status', t('newTask'), 'plus', { classes: 'column-add', id: status, iconOnly: true })}</header>
      ${shown.length ? `<ul>${shown.map(boardTask).join('')}</ul>` : empty('noColumn')}${shown.length < matching.length ? `<a class="text-link more-tasks" href="#board" data-action="navigate" data-id="board">${t('moreTasks', { n: num(matching.length - shown.length) })}</a>` : ''}</section>`;
  }).join('');
  const controls = `<span class="board-controls">${categoryFilter()}${preview ? pageLink('board', 'openBoard', 'text-link board-link', 'chevron') : ''}</span>`;
  return `<section class="paper board-card">${preview ? cardTitle('board', 'board', controls) : `<div class="board-top">${controls}</div>`}<div class="board-grid">${columns}</div></section>`;
}

function calendarCard(preview = false) {
  const first = new Date(month.getFullYear(), month.getMonth(), 1, 12);
  const weekStart = state.language === 'ar' ? 6 : 0;
  const offset = (first.getDay() - weekStart + 7) % 7;
  const last = new Date(month.getFullYear(), month.getMonth() + 1, 0, 12).getDate();
  const dueCounts = new Map();
  for (const task of state.tasks) {
    if (task.due) dueCounts.set(task.due, (dueCounts.get(task.due) ?? 0) + 1);
  }
  const headings = Array.from({ length: 7 }, (_, index) => `<span class="week-day">${dateText(new Date(2026, 0, 4 + weekStart + index, 12), { weekday: 'short' })}</span>`).join('');
  const blanks = '<span aria-hidden="true"></span>'.repeat(offset);
  const dates = Array.from({ length: last }, (_, index) => {
    const date = Planner.offsetDay(first, index);
    const key = Planner.dayKey(date);
    const count = dueCounts.get(key) ?? 0;
    const label = `${dateText(date, { dateStyle: 'full' })}${count ? ` • ${count === 1 ? t('oneDue') : t('dueOnDay', { n: num(count) })}` : ''}`;
    return `<button type="button" class="calendar-day${key === currentDay ? ' is-today' : ''}${key === selectedDate ? ' selected' : ''}${count ? ' has-due' : ''}" data-action="calendar-day" data-id="${key}" aria-label="${escapeHTML(label)}" aria-pressed="${key === selectedDate}"${key === currentDay ? ' aria-current="date"' : ''}>${num(index + 1)}</button>`;
  }).join('');
  const monthLabel = dateText(month, { month: 'long', year: 'numeric' });
  const switcher = `<div class="month-switcher">${button('month-prev', t('previousMonth'), 'chevron', { classes: 'icon-button calendar-prev', iconOnly: true })}<span aria-live="polite">${monthLabel}</span>${button('month-next', t('nextMonth'), 'chevron', { classes: 'icon-button calendar-next', iconOnly: true })}</div>`;
  return `<section class="paper calendar-card">${preview ? cardTitle('calendar', 'calendar') : ''}<div class="calendar-toolbar">${switcher}${button('calendar-today', t('today'), undefined, { classes: 'text-link' })}</div><div class="calendar-grid" aria-label="${t('calendarLabel')}">${headings}${blanks}${dates}</div>${preview ? `<div class="calendar-footer">${pageLink('calendar', 'openCalendar', 'text-link', 'chevron')}</div>` : ''}</section>`;
}

function deadlineList(tasks, noItems) {
  return tasks.length ? `<ul class="lined-list">${tasks.map(task => taskLine(task, 'deadlines')).join('')}</ul>` : empty(noItems);
}

function calendarView() {
  const due = state.tasks.filter(task => task.due === selectedDate);
  const byDue = (a, b) => a.due.localeCompare(b.due);
  const upcoming = state.tasks.filter(task => task.status !== 'done' && task.due && task.due >= currentDay).sort(byDue);
  const overdue = state.tasks.filter(task => Planner.isOverdue(task, currentDay)).sort(byDue);
  const date = dateText(selectedDate, { month: 'long', day: 'numeric' });
  return `${sectionHeading('calendar', button('new-date', t('newTask'), 'plus', { classes: 'button primary', id: selectedDate }))}<div class="calendar-layout">${calendarCard()}<div class="deadline-stack"><section class="paper deadlines-card"><h2>${escapeHTML(t('onDate', { date }))}</h2>${deadlineList(due, 'noDue')}</section><section class="paper deadlines-card">${cardTitle('upcoming', 'calendar')}${deadlineList(upcoming, 'noUpcoming')}</section><section class="paper deadlines-card">${cardTitle('overdue', 'overdue')}${deadlineList(overdue, 'noOverdue')}</section></div></div>`;
}

function timerCard(preview = false) {
  return `<section class="focus-card${preview ? '' : ' focus-large'}"><span class="tape focus-tape" aria-hidden="true"></span>${preview ? cardTitle('focus', 'focus') : `<p class="timer-type">${t('pomodoro')}</p>`}<div class="timer-dial"><strong id="timer-clock" role="timer" dir="ltr"></strong><span id="timer-state"></span></div><div class="timer-controls" id="timer-controls"></div></section>`;
}

function refreshTimer() {
  let remaining = Planner.remainingTime(state.timer);
  if (state.timer.endsAt !== null && remaining === 0) {
    state.timer = { remaining: 0, endsAt: null };
    persist();
    updateStorageMessage();
    say('timerAnnounce');
    remaining = 0;
  }
  const clock = byId('timer-clock');
  if (!clock) return;
  const seconds = Math.ceil(remaining / 1000);
  const minutes = Math.floor(seconds / 60);
  const digits = new Intl.NumberFormat(locale(), { minimumIntegerDigits: 2 });
  const value = `${digits.format(minutes)}:${digits.format(seconds % 60)}`;
  if (clock.textContent !== value) clock.textContent = value;
  clock.parentElement.style.setProperty('--timer-part', `${remaining / Planner.duration * 100}%`);
  const running = state.timer.endsAt !== null;
  const status = running ? 'timerRunning' : remaining === 0 ? 'timerFinished' : remaining === Planner.duration ? 'timerReady' : 'timerPaused';
  const statusNode = byId('timer-state');
  if (statusNode.textContent !== t(status)) statusNode.textContent = t(status);
  const action = running ? 'pause' : status === 'timerPaused' ? 'resume' : 'start';
  const controls = byId('timer-controls');
  if (controls.dataset.mode !== action) {
    const focused = controls.contains(document.activeElement);
    controls.dataset.mode = action;
    controls.innerHTML = `${button(`timer-${running ? 'pause' : 'start'}`, t(action), running ? 'pause' : 'play', { classes: 'button timer-primary' })}${button('timer-reset', t('reset'), 'reset', { classes: 'button timer-reset' })}`;
    if (focused) controls.firstElementChild.focus();
  }
}

function analyticsCard(preview = false) {
  const counts = Planner.stats(state.tasks, currentDay);
  const value = counts.total ? Math.round(counts.done / counts.total * 100) : 0;
  const doing = counts.total ? (counts.done + counts.doing) / counts.total * 100 : 0;
  const days = Planner.week(state.tasks, Planner.fromKey(currentDay));
  const max = Math.max(1, ...days.map(([, count]) => count));
  const chart = days.map(([date, count]) => `<li aria-label="${escapeHTML(`${shortDate(date)} • ${t('chartCount', { n: num(count) })}`)}"><span class="bar-track"><span class="bar${date === currentDay ? ' bar-today' : ''}" style="--height:${count / max * 100}%">${count ? `<span>${num(count)}</span>` : ''}</span></span><span>${dateText(date, { weekday: 'short' })}</span></li>`).join('');
  return `<section class="paper analytics-card">${preview ? cardTitle('analytics', 'analytics') : ''}<div class="analytics-body"><div class="analytics-summary">${ring(value, `${t('overall')} • ${percent(value)}`, `--part:${counts.total ? counts.done / counts.total * 100 : 0}%;--second:${doing}%;`)}<ul class="legend">${legend('done', counts.done)}${legend('doing', counts.doing)}${legend('todo', counts.todo)}</ul><p class="chart-caption">${t('overall')}</p></div><div class="weekly-chart"><h3>${t('weekly')}</h3><ul aria-label="${t('weeklyLabel')}">${chart}</ul></div></div>${preview ? `<div class="analytics-footer">${pageLink('analytics', 'openAnalytics', 'text-link', 'chevron')}</div>` : ''}</section>`;
}

function dashboard() {
  return `${dateHeading()}${statsCards()}<div class="overview-grid">${topCard()}${todayCard()}${inboxCard()}</div>${board(true)}<div class="bottom-grid">${timerCard(true)}${analyticsCard(true)}${calendarCard(true)}</div>`;
}

function filtersBar() {
  const active = Boolean(query) || Object.values(filters).some(value => value !== 'all');
  return `<div class="filter-bar">${categoryFilter()}
    ${select('priority', 'priority', [['all', t('allPriorities')], ...Planner.priorities.map(key => [key, t(key)])], filters.priority)}
    ${select('status', 'status', [['all', t('allStatuses')], ['open', t('incomplete')], ...Planner.statuses.map(key => [key, statusName(key)])], filters.status)}
    ${select('date', 'due', [['all', t('allDates')], ['today', t('dateToday')], ['overdue', t('overdue')]], filters.date)}
    ${active ? button('reset-filters', t('resetFilters'), 'x', { classes: 'text-link' }) : ''}</div>`;
}

function taskView() {
  const tasks = filterTasks(state.tasks);
  return `${sectionHeading('tasks')}<section class="paper task-panel">${filtersBar()}${tasks.length ? `<ul class="lined-list task-list">${tasks.map(task => taskLine(task, 'list')).join('')}</ul>` : empty(state.tasks.length ? 'noResults' : 'noTasks')}</section>`;
}

function inboxView() {
  const tasks = inboxTasks();
  return `${sectionHeading('inbox', `<span class="count-pill">${num(tasks.length)}</span>`)}<section class="paper task-panel full-inbox">${captureForm()}${tasks.length ? `<ul class="lined-list task-list">${tasks.map(task => taskLine(task, 'inbox')).join('')}</ul>` : empty('noInbox')}</section>`;
}

function settingsView() {
  const hasSample = state.tasks.some(task => /^sample-\d+$/.test(task.id));
  const custom = state.categories.map(item => `<li><span class="category-dot custom"></span>${textHTML(item.name)}${button('category-remove', t('removeCategory'), 'trash', { classes: 'icon-button row-action', iconOnly: true, id: item.id })}</li>`).join('');
  return `${sectionHeading('settings')}<div class="settings-grid">
    <section class="paper setting-card">${cardTitle('language', 'globe')}<p>${t('languageInfo')}</p><div class="settings-actions">${button('set-language', t('switchEnglish'), undefined, { classes: `button ${state.language === 'en' ? 'primary' : 'secondary'}`, id: 'en', extra: `aria-pressed="${state.language === 'en'}" lang="en"` })}${button('set-language', t('switchArabic'), undefined, { classes: `button ${state.language === 'ar' ? 'primary' : 'secondary'}`, id: 'ar', extra: `aria-pressed="${state.language === 'ar'}" lang="ar"` })}</div></section>
    <section class="paper setting-card">${cardTitle('backup', 'download')}<p>${t('backupInfo')}</p><div class="settings-actions">${button('export', t('export'), 'download', { classes: 'button primary' })}${button('import', t('import'), 'upload')}</div></section>
    <section class="paper setting-card">${cardTitle('categories', 'flag')}<p>${t('settingsCategoryInfo')}</p><ul class="settings-categories">${Planner.categories.map(id => `<li><span class="category-dot ${id}"></span>${t(id)}</li>`).join('')}${custom}</ul>${button('category-add', t('addCategory'), 'plus')}</section>
    <section class="paper setting-card">${cardTitle('sample', 'tasks')}<p>${t(hasSample ? 'sampleInfo' : 'loadSampleInfo')}</p>${button(hasSample ? 'clear-samples' : 'load-samples', t(hasSample ? 'clearSamples' : 'loadSamples'), hasSample ? 'trash' : 'plus')}</section></div>`;
}

function updateStorageMessage() {
  const element = byId('storage-error');
  if (element) {
    element.hidden = !storageFailed;
    element.textContent = storageFailed ? t('storageError') : '';
  }
}

function getFocus() {
  const node = document.activeElement;
  if (!node || node === document.body || dialog.contains(node)) return null;
  return { id: node.id, action: node.dataset.action, target: node.dataset.id, name: node.name, home: node.closest('#main-content, #sidebar, #toolbar')?.id };
}

function restoreFocus(snapshot) {
  if (!snapshot) return;
  const scope = byId(snapshot.home) ?? document;
  const node = (snapshot.id && byId(snapshot.id)) || (snapshot.action && [...scope.querySelectorAll('[data-action]')].find(item => item.dataset.action === snapshot.action && item.dataset.id === snapshot.target)) || (snapshot.name && [...scope.querySelectorAll('[name]')].find(item => item.name === snapshot.name));
  if (node) node.focus({ preventScroll: true });
  else if (snapshot.home === 'main-content') main.focus({ preventScroll: true });
}

function renderMain() {
  const pages = { dashboard, tasks: taskView, inbox: inboxView, board: () => `${sectionHeading('board')}${board()}`, calendar: calendarView, focus: () => `${sectionHeading('focus')}${timerCard()}`, analytics: () => `${sectionHeading('analytics')}${statsCards()}${analyticsCard()}`, settings: settingsView };
  main.innerHTML = `<p id="storage-error" role="status" class="storage-error" hidden></p>${pages[view]()}`;
  updateStorageMessage();
  refreshTimer();
}

function render() {
  const focus = getFocus();
  document.documentElement.lang = state.language;
  document.documentElement.dir = state.language === 'ar' ? 'rtl' : 'ltr';
  document.title = `${t('brand')} — ${t('creative')}`;
  document.body.classList.toggle('menu-open', mobileMenu);
  byId('skip-link').textContent = t('skip');
  renderSidebar();
  renderToolbar();
  renderMain();
  restoreFocus(focus);
}

function commit(message, values) {
  persist();
  render();
  if (message) say(message, values);
}

function dialogHeader(title) {
  return `<div class="dialog-head"><h2 id="dialog-title">${title}</h2>${button('close-dialog', t('close'), 'x', { classes: 'icon-button', iconOnly: true })}</div>`;
}

function showDialog(html) {
  if (!dialog.open) dialogReturn = getFocus();
  dialog.innerHTML = html;
  if (!dialog.open) dialog.showModal();
  dialog.querySelector('[data-initial-focus]')?.focus();
}

function closeDialog() {
  if (dialog.open) dialog.close();
}

function confirmDialog(title, message, label, action, danger = true) {
  confirmAction = action;
  showDialog(`${dialogHeader(title)}<p class="confirm-message" dir="auto">${escapeHTML(message)}</p><div class="dialog-actions">${button('close-dialog', t('cancel'), undefined, { extra: 'data-initial-focus' })}${button('confirm', label, undefined, { classes: `button ${danger ? 'danger' : 'primary'}` })}</div>`);
}

function editTask(task, defaults = {}) {
  const value = task ?? { title: '', notes: '', category: defaults.category ?? '', priority: 'medium', status: defaults.status ?? 'todo', due: defaults.due ?? '', inbox: Boolean(defaults.inbox) };
  const pinned = task && Planner.topIds(state, currentDay).includes(task.id);
  showDialog(`${dialogHeader(t(task ? 'edit' : 'newTask'))}<form data-form="task"${task ? ` data-id="${escapeHTML(task.id)}"` : ''}>
    <label>${t('title')}<input name="title" value="${escapeHTML(task ? titleOf(task) : value.title)}" maxlength="160" required data-initial-focus dir="auto"></label>
    <label>${t('notes')}<textarea name="notes" maxlength="2000" rows="3" dir="auto">${escapeHTML(value.notes)}</textarea></label>
    <div class="form-grid"><label>${t('category')}${select('category', 'category', [['', t('none')], ...categoryEntries()], value.category)}</label>
    <label>${t('priority')}${select('priority', 'priority', Planner.priorities.map(key => [key, t(key)]), value.priority)}</label>
    <label>${t('status')}${select('status', 'status', Planner.statuses.map(key => [key, statusName(key)]), value.status)}</label>
    <label>${t('due')}<input type="date" name="due" value="${value.due}" min="0001-01-01" max="9999-12-31"></label></div>
    <div class="form-checks"><label><input type="checkbox" name="inbox"${value.inbox ? ' checked' : ''}${value.status !== 'todo' || pinned ? ' disabled' : ''}>${t('sendInbox')}</label><label><input type="checkbox" name="pinned"${pinned ? ' checked' : ''}>${t('pinToday')}</label></div>
    <p class="form-error" role="alert" hidden></p>
    <div class="dialog-actions">${task ? button('delete-task', t('delete'), 'trash', { id: task.id, classes: 'text-link delete-task' }) : ''}${button('close-dialog', t('cancel'), undefined)}<button class="button primary" type="submit">${t('save')}</button></div></form>`);
}

function formError(form, key) {
  const error = form.querySelector('.form-error');
  error.textContent = t(key);
  error.hidden = false;
}

function saveTask(form) {
  const data = new FormData(form);
  const previous = taskById(form.dataset.id);
  const title = data.get('title').trim();
  if (!title) return formError(form, 'badTitle');
  const id = previous?.id ?? Planner.id();
  const date = Planner.dayKey();
  const top = Planner.topIds(state, date);
  const pinned = data.has('pinned');
  if (pinned && !top.includes(id) && top.length >= 3) return formError(form, 'topLimit');
  const status = data.get('status');
  const task = Planner.setStatus({
    id, ...(previous?.arabic && title === titleOf(previous) ? { title: previous.title, arabic: previous.arabic } : { title }),
    notes: data.get('notes').trim(), category: data.get('category'), priority: data.get('priority'),
    inbox: data.has('inbox') && !pinned, due: data.get('due'), completedAt: previous?.completedAt ?? null
  }, status);
  state.tasks = previous ? state.tasks.map(item => item.id === id ? task : item) : [task, ...state.tasks];
  const ids = pinned && !top.includes(id) ? [...top, id] : pinned ? top : top.filter(item => item !== id);
  state.top = { date, ids };
  closeDialog();
  commit(previous ? 'saved' : 'created');
}

function updateTask(id, update, message, values) {
  state.tasks = state.tasks.map(task => task.id === id ? update(task) : task);
  commit(message, values);
}

function pinTask(id) {
  const top = Planner.topIds(state, currentDay);
  const exists = top.includes(id);
  if (!exists && top.length >= 3) return say('topLimit');
  state.top = { date: currentDay, ids: exists ? top.filter(item => item !== id) : [...top, id] };
  updateTask(id, task => ({ ...task, inbox: false }), 'topUpdated');
}

function topPicker() {
  const active = Planner.topIds(state, currentDay);
  const selected = new Set(active);
  showDialog(`${dialogHeader(t('top'))}<p class="picker-hint">${t('topHint')}</p><form data-form="top"><input type="search" name="top-search" placeholder="${t('topSearch')}" aria-label="${t('topSearch')}" data-initial-focus dir="auto"><div class="picker-list"></div><p class="form-error" role="alert" hidden></p><div class="dialog-actions">${button('close-dialog', t('cancel'), undefined)}<button class="button primary" type="submit">${t('pickTop')}</button></div></form>`);
  const form = dialog.querySelector('form');
  const list = form.querySelector('.picker-list');
  const search = form.elements['top-search'];
  const ordered = [...topTasks(), ...state.tasks.filter(task => !selected.has(task.id))];
  const renderChoices = () => {
    const needle = search.value.trim().toLocaleLowerCase(locale());
    const matches = ordered.filter(task => titleOf(task).toLocaleLowerCase(locale()).includes(needle));
    list.innerHTML = matches.length ? matches.map(task => `<label><input type="checkbox" value="${escapeHTML(task.id)}"${selected.has(task.id) ? ' checked' : ''}>${taskName(task)}${badge(task)}</label>`).join('') : empty(ordered.length ? 'topNoMatch' : 'topEmpty');
  };
  search.addEventListener('input', renderChoices);
  list.addEventListener('change', event => {
    const input = event.target;
    if (input.checked && selected.size >= 3) {
      input.checked = false;
      return formError(form, 'topLimit');
    }
    if (input.checked) selected.add(input.value);
    else selected.delete(input.value);
    form.querySelector('.form-error').hidden = true;
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    state.top = { date: Planner.dayKey(), ids: [...selected] };
    state.tasks = state.tasks.map(task => selected.has(task.id) ? { ...task, inbox: false } : task);
    closeDialog();
    commit('topUpdated');
  });
  renderChoices();
}

function categoryDialog() {
  showDialog(`${dialogHeader(t('addCategory'))}<form data-form="category"><label>${t('categoryName')}<input name="name" maxlength="35" required dir="auto" data-initial-focus></label><p class="form-error" role="alert" hidden></p><div class="dialog-actions">${button('close-dialog', t('cancel'))}<button class="button primary" type="submit">${t('addCategory')}</button></div></form>`);
}

function setLanguage(language) {
  state.language = language;
  clearTimeout(toastTimeout);
  toast.classList.remove('visible');
  commit();
}

function exportBackup() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `taskflow-backup-${Planner.dayKey()}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  say('exported');
}

backupFile.addEventListener('change', async () => {
  const [file] = backupFile.files;
  backupFile.value = '';
  if (!file) return;
  let restored;
  try {
    restored = Planner.validate(JSON.parse(await file.text()));
  } catch {
    return say('invalidBackup');
  }
  confirmDialog(t('importTitle'), t('importMessage', { n: num(restored.tasks.length) }), t('replace'), () => {
    state = restored;
    filters = defaultFilters();
    query = '';
    commit('imported');
  });
});

function removeSamples() {
  state.tasks = state.tasks.filter(task => !/^sample-\d+$/.test(task.id));
  state.top.ids = state.top.ids.filter(id => taskById(id));
  commit('samplesCleared');
}

function removeCategory(id) {
  state.categories = state.categories.filter(item => item.id !== id);
  state.tasks = state.tasks.map(task => task.category === id ? { ...task, category: '' } : task);
  if (filters.category === id) filters.category = 'all';
  commit('categoryRemoved');
}

function changeMonth(offset) {
  month = new Date(month.getFullYear(), month.getMonth() + offset, 1, 12);
  selectedDate = Planner.dayKey(month);
  render();
}

function statusChange(id, status) {
  const task = taskById(id);
  if (!task || task.status === status) return;
  updateTask(id, item => Planner.setStatus(item, status), 'taskMoved', { status: statusName(status) });
}

function setTimer(option) {
  const now = Date.now();
  const remaining = Planner.remainingTime(state.timer, now);
  if (option === 'reset') state.timer = Planner.resetTimer();
  if (option === 'pause') state.timer = { remaining, endsAt: null };
  if (option === 'start') state.timer = { remaining: remaining || Planner.duration, endsAt: now + (remaining || Planner.duration) };
  persist();
  updateStorageMessage();
  refreshTimer();
}

const actions = {
  navigate: id => setView(id),
  menu: () => { mobileMenu = !mobileMenu; render(); },
  category: id => setView('tasks', { ...defaultFilters(), category: id }),
  'category-add': categoryDialog,
  'category-remove': id => confirmDialog(t('removeCategory'), t('removeCategoryMessage', { name: categoryName(id) }), t('removeCategory'), () => removeCategory(id)),
  'clear-search': () => { query = ''; render(); byId('global-search').focus(); },
  'reset-filters': () => setView('tasks'),
  language: () => setLanguage(state.language === 'en' ? 'ar' : 'en'),
  'set-language': setLanguage,
  new: () => editTask(null, { inbox: view === 'inbox', category: filters.category === 'all' ? '' : filters.category }),
  'new-status': id => editTask(null, { status: id, category: filters.category === 'all' ? '' : filters.category }),
  'new-date': id => editTask(null, { due: id }),
  edit: id => { const task = taskById(id); if (task) editTask(task); },
  'top-picker': topPicker,
  pin: pinTask,
  toggle: id => {
    const task = taskById(id);
    if (!task) return;
    const done = task.status === 'done';
    updateTask(id, item => Planner.setStatus(item, done ? 'todo' : 'done'), done ? 'taskReopened' : 'taskComplete');
  },
  'move-inbox': id => updateTask(id, task => ({ ...task, inbox: false }), 'taskMoved', { status: statusName('todo') }),
  'delete-task': id => {
    const task = taskById(id);
    if (!task) return;
    confirmDialog(t('delete'), t('deleteMessage', { name: titleOf(task) }), t('delete'), () => {
      state.tasks = state.tasks.filter(task => task.id !== id);
      state.top.ids = state.top.ids.filter(taskId => taskId !== id);
      commit('deleted');
    });
  },
  'close-dialog': closeDialog,
  confirm: () => { const action = confirmAction; closeDialog(); action?.(); },
  stat: id => setView('tasks', { ...defaultFilters(), ...(id === 'overdue' ? { date: 'overdue' } : id === 'total' ? {} : { status: id }) }),
  'month-prev': () => changeMonth(-1),
  'month-next': () => changeMonth(1),
  'calendar-today': () => { selectedDate = currentDay; month = Planner.fromKey(currentDay); render(); },
  'calendar-day': id => { selectedDate = id; if (view !== 'calendar') setView('calendar'); else render(); },
  'timer-start': () => setTimer('start'),
  'timer-pause': () => setTimer('pause'),
  'timer-reset': () => setTimer('reset'),
  export: exportBackup,
  import: () => backupFile.click(),
  'clear-samples': () => confirmDialog(t('clearSampleTitle'), t('clearSampleMessage'), t('clearSamples'), removeSamples),
  'load-samples': () => {
    const demo = Planner.sample();
    state.tasks.push(...demo.tasks);
    if (!Planner.topIds(state, currentDay).length) state.top = demo.top;
    commit('samplesLoaded');
  }
};

document.addEventListener('click', event => {
  const control = event.target.closest('[data-action]');
  if (!control) return;
  if (event.target.closest('.board-task') && Date.now() < ignoreClickUntil) return;
  if (control.matches('a') && (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)) return;
  event.preventDefault();
  actions[control.dataset.action]?.(control.dataset.id);
});

document.addEventListener('submit', event => {
  const form = event.target;
  if (!form.dataset.form) return;
  event.preventDefault();
  if (form.dataset.form === 'task') return saveTask(form);
  if (form.dataset.form === 'capture') {
    const field = form.elements.title;
    const title = field.value.trim();
    if (!title) { field.setCustomValidity(t('badTitle')); field.reportValidity(); return; }
    state.tasks.unshift({ id: Planner.id(), title, category: '', priority: 'medium', status: 'todo', inbox: true, notes: '', due: '', completedAt: null });
    commit('captured');
    main.querySelector('[data-form="capture"] input')?.focus();
  }
  if (form.dataset.form === 'category') {
    const name = form.elements.name.value.trim();
    if (!name) { form.elements.name.value = ''; form.elements.name.reportValidity(); return; }
    const names = [...Planner.categories.flatMap(key => [STRINGS.en[key], STRINGS.ar[key]]), ...state.categories.map(item => item.name)];
    if (names.some(item => item.toLocaleLowerCase(locale()) === name.toLocaleLowerCase(locale()))) return formError(form, 'categoryExists');
    state.categories.push({ id: Planner.id(), name });
    closeDialog();
    commit('categoryAdded');
  }
});

function handleSearch(event) {
  const input = event.target;
  if (input.id === 'global-search' && !event.isComposing) {
    const previous = query;
    query = input.value;
    if (view !== 'tasks' && query.trim()) {
      const position = query.length;
      setView('tasks', null, true, false);
      const nextInput = byId('global-search');
      nextInput.focus();
      nextInput.setSelectionRange(position, position);
    } else if (previous !== query) {
      toolbar.querySelector('.clear-search').hidden = !query;
      renderMain();
    }
  }
}

document.addEventListener('compositionend', handleSearch);
document.addEventListener('input', event => {
  handleSearch(event);
  const input = event.target;
  if (input.closest('[data-form="capture"]') && input.setCustomValidity) input.setCustomValidity('');
});

document.addEventListener('change', event => {
  const input = event.target;
  if (input.matches('main select')) {
    const focus = getFocus();
    filters[input.name] = input.value;
    renderSidebar();
    renderMain();
    restoreFocus(focus);
  }
  if (input.closest('[data-form="task"]')) {
    const { status, inbox, pinned } = input.form.elements;
    inbox.disabled = status.value !== 'todo' || pinned.checked;
    if (inbox.disabled) inbox.checked = false;
    input.form.querySelector('.form-error').hidden = true;
  }
});

document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k' && !dialog.open) {
    event.preventDefault();
    byId('global-search').focus();
  }
  if (event.key === 'Escape' && !dialog.open && mobileMenu) actions.menu();
});

dialog.addEventListener('close', () => {
  restoreFocus(dialogReturn);
  dialogReturn = null;
  confirmAction = null;
});

byId('skip-link').addEventListener('click', event => {
  event.preventDefault();
  main.focus();
  main.scrollIntoView({ block: 'start' });
});

window.addEventListener('hashchange', () => setView(getRoute()));
window.addEventListener('storage', event => {
  if (event.key !== Planner.storageKey || !event.newValue) return;
  try {
    state = Planner.validate(JSON.parse(event.newValue));
    if (filters.category !== 'all' && filters.category && !allCategories().includes(filters.category)) filters.category = 'all';
    closeDialog();
    render();
  } catch { /* Keep the current planner when another tab writes invalid data. */ }
});

function markDrop(column) {
  main.querySelectorAll('.drop-target').forEach(item => { if (item !== column) item.classList.remove('drop-target'); });
  column?.classList.add('drop-target');
}

main.addEventListener('dragstart', event => {
  const card = event.target.closest('[data-task]');
  if (!card) return;
  if (pointerDrag) { event.preventDefault(); return; }
  dragId = card.dataset.task;
  event.dataTransfer.setData('text/plain', dragId);
  event.dataTransfer.effectAllowed = 'move';
  requestAnimationFrame(() => { if (dragId) card.classList.add('dragging'); });
});

main.addEventListener('dragover', event => {
  const column = event.target.closest('[data-drop]');
  if (!dragId || !column) return;
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
  markDrop(column);
});

main.addEventListener('dragleave', event => {
  const column = event.target.closest('[data-drop]');
  if (column && (!(event.relatedTarget instanceof Node) || !column.contains(event.relatedTarget))) column.classList.remove('drop-target');
});

main.addEventListener('drop', event => {
  const column = event.target.closest('[data-drop]');
  if (!dragId || !column) return;
  event.preventDefault();
  statusChange(dragId, column.dataset.drop);
  endDrag();
});

function endDrag() {
  dragId = undefined;
  main.querySelector('.dragging')?.classList.remove('dragging');
  markDrop(null);
}

main.addEventListener('dragend', endDrag);

main.addEventListener('pointerdown', event => {
  const grip = event.target.closest('.drag-grip');
  if (event.button !== 0 || !grip || pointerDrag) return;
  event.preventDefault();
  const card = grip.closest('[data-task]');
  grip.setPointerCapture(event.pointerId);
  pointerDrag = { pointer: event.pointerId, card, x: event.clientX, y: event.clientY, active: false };
});

function dragFrame() {
  if (!pointerDrag?.active) return;
  const { x, y, ghost } = pointerDrag;
  const offset = y > innerHeight - 72 ? 9 : y < 72 ? -9 : 0;
  if (offset) window.scrollBy(0, offset);
  ghost.style.transform = `translate(${x + 14}px, ${y + 14}px)`;
  markDrop(document.elementFromPoint(x, y)?.closest('[data-drop]'));
  pointerDrag.frame = requestAnimationFrame(dragFrame);
}

main.addEventListener('pointermove', event => {
  if (pointerDrag?.pointer !== event.pointerId) return;
  if (!pointerDrag.active && Math.hypot(event.clientX - pointerDrag.x, event.clientY - pointerDrag.y) > 8) {
    const task = taskById(pointerDrag.card.dataset.task);
    if (!task) return;
    pointerDrag.active = true;
    pointerDrag.card.classList.add('dragging');
    const ghost = document.createElement('div');
    ghost.className = 'touch-ghost';
    ghost.textContent = titleOf(task);
    pointerDrag.ghost = document.body.appendChild(ghost);
    pointerDrag.frame = requestAnimationFrame(dragFrame);
  }
  if (pointerDrag.active) {
    pointerDrag.x = event.clientX;
    pointerDrag.y = event.clientY;
  }
});

function endPointerDrag(event) {
  if (pointerDrag?.pointer !== event.pointerId) return;
  const { active, card, ghost, frame } = pointerDrag;
  pointerDrag = undefined;
  if (!active) return;
  const column = event.type === 'pointerup' ? document.elementFromPoint(event.clientX, event.clientY)?.closest('[data-drop]') : null;
  cancelAnimationFrame(frame);
  ghost.remove();
  ignoreClickUntil = Date.now() + 350;
  if (column) statusChange(card.dataset.task, column.dataset.drop);
  endDrag();
}

window.addEventListener('pointerup', endPointerDrag);
window.addEventListener('pointercancel', endPointerDrag);

function tick() {
  const now = Planner.dayKey();
  if (now !== currentDay) {
    if (selectedDate === currentDay) {
      selectedDate = now;
      month = Planner.fromKey(now);
    }
    currentDay = now;
    if (!dialog.open) render();
  }
  refreshTimer();
}

render();
setInterval(tick, 250);
document.addEventListener('visibilitychange', tick);
