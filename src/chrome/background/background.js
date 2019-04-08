chrome.runtime.onInstalled.addListener(() => {
  console.log('create contextMenus');
  chrome.contextMenus.create({
    id: 'fastnote',
    title: 'fastnote',
    contexts: ['selection']
  })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log(info.selectionText);
})
