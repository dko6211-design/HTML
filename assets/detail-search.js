const glossaryTerms = [
  ['HTML', 'html.html'], ['CSS', 'css.html'], ['JavaScript', 'javascript.html'],
  ['프론트엔드 (Frontend)', 'frontend.html'], ['백엔드 (Backend)', 'backend.html'],
  ['리포지터리 (Repository)', 'repository.html'], ['GitHub', 'github.html'], ['Docker', 'docker.html'],
  ['Commit', 'commit.html'], ['Push', 'push.html'], ['Fetch', 'fetch.html'], ['Pull', 'pull.html'],
  ['Pull Request', 'pull-request.html'], ['Merge', 'merge.html'], ['UI', 'ui.html'],
  ['UX', 'ux.html'], ['API', 'api.html']
];

const detailSearch = document.createElement('section');
detailSearch.className = 'detail-search';
detailSearch.innerHTML = '<label for="detail-search-input">용어 검색</label><input id="detail-search-input" type="search" placeholder="다른 용어 검색" autocomplete="off"><div id="detail-search-results" class="detail-search-results" aria-live="polite"></div>';
document.querySelector('.detail').prepend(detailSearch);

const input = document.querySelector('#detail-search-input');
const results = document.querySelector('#detail-search-results');
function renderDetailResults() {
  const keyword = input.value.trim().toLowerCase();
  if (!keyword) { results.innerHTML = ''; return; }
  const matches = glossaryTerms.filter(([name]) => name.toLowerCase().includes(keyword));
  results.innerHTML = matches.length
    ? matches.map(([name, file]) => `<a href="./${file}">${name}</a>`).join('')
    : '<span>검색 결과가 없습니다.</span>';
}
input.addEventListener('input', renderDetailResults);
input.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    const first = results.querySelector('a');
    if (first) window.location.href = first.href;
  }
});
