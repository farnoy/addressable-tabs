browser.commands.onCommand.addListener(name => {
  const index = parseInt(/tab(\d+)/.exec(name)[1], 10);
  browser.tabs.query({currentWindow: true, index}).then(tabs => {
    if (tabs.length > 0)
      browser.tabs.update(tabs[0].id, {active: true});
  })
})