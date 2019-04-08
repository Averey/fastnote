import mountApp from 'src/contentpage/App';

const initApp = () => {
  console.log('initApp');
  const div = document.createElement('div');
  div.id = "content-app-container";
  document.body.appendChild(div);
  mountApp(div)
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp)
} else {
  initApp();
}

