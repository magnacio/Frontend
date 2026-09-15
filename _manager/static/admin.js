
const subject = document.getElementById('subject');
const baseFolder = document.getElementById('baseFolder');
const newFolder = document.getElementById('newFolder');
const preview = document.getElementById('destinationPreview');
const files = document.getElementById('files');
const dropzone = document.getElementById('dropzone');
const dropTitle = document.getElementById('dropTitle');
const dropText = document.getElementById('dropText');

async function loadFolders() {
  const value = subject.value;
  baseFolder.innerHTML = '';
  if (!value) {
    baseFolder.disabled = true;
    baseFolder.innerHTML = '<option value=".">Choose a subject first</option>';
    updateDestination();
    return;
  }

  const response = await fetch('/api/folders?subject=' + encodeURIComponent(value));
  const folders = await response.json();
  baseFolder.disabled = false;

  folders.forEach(folder => {
    const option = document.createElement('option');
    option.value = folder.value;
    option.textContent = folder.label;
    baseFolder.appendChild(option);
  });

  // Prefer a folder whose name looks like Assignment/assignemnt/Assignement.
  const options = [...baseFolder.options];
  const assignment = options.find(o => /assign/i.test(o.value) && o.value.split('/').length <= 2);
  if (assignment) baseFolder.value = assignment.value;

  updateDestination();
}

function updateDestination() {
  const sub = subject.value || '[subject]';
  const base = baseFolder.value && baseFolder.value !== '.' ? '/' + baseFolder.value : '';
  const extra = newFolder.value.trim() ? '/' + newFolder.value.trim().replaceAll('\\','/') : '';
  preview.textContent = 'Destination: ' + sub + base + extra + '/';
}

subject?.addEventListener('change', loadFolders);
baseFolder?.addEventListener('change', updateDestination);
newFolder?.addEventListener('input', updateDestination);

files?.addEventListener('change', () => {
  const selected = [...files.files];
  if (!selected.length) return;
  dropTitle.textContent = selected.length + (selected.length === 1 ? ' file selected' : ' files selected');
  dropText.textContent = selected.map(f => f.name).join(' · ');
});

['dragenter','dragover'].forEach(event => dropzone?.addEventListener(event, e => {
  e.preventDefault();
  dropzone.classList.add('dragging');
}));
['dragleave','drop'].forEach(event => dropzone?.addEventListener(event, e => {
  dropzone.classList.remove('dragging');
}));

const search = document.getElementById('search');
const tabs = [...document.querySelectorAll('.tab')];
const rows = [...document.querySelectorAll('.assignment-row')];
let activeFilter = 'all';

function applyFilters() {
  const q = (search?.value || '').toLowerCase().trim();
  rows.forEach(row => {
    const matchesSubject = activeFilter === 'all' || row.dataset.subject === activeFilter;
    const matchesSearch = !q || row.dataset.search.includes(q);
    row.classList.toggle('hidden-row', !(matchesSubject && matchesSearch));
  });
}

search?.addEventListener('input', applyFilters);
tabs.forEach(tab => tab.addEventListener('click', () => {
  tabs.forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  activeFilter = tab.dataset.filter;
  applyFilters();
}));

const dialog = document.getElementById('renameDialog');
document.querySelectorAll('.rename-btn').forEach(btn => btn.addEventListener('click', () => {
  document.getElementById('renamePath').value = btn.dataset.path;
  document.getElementById('renameLabel').value = btn.dataset.label;
  dialog.showModal();
}));
document.getElementById('closeDialog')?.addEventListener('click', () => dialog.close());

updateDestination();
