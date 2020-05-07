const removeClass = (elem, className) => {
  Array.prototype.forEach.call(elem, (i) => {
    i.classList.remove(className);
  });
};

const activateAccordion = (tabs, activeTab) => {
  Array.prototype.forEach.call(tabs, function (tab) {
    tab.addEventListener(`click`, function (evt) {
      evt.preventDefault();

      if (tab.classList.contains(activeTab)) {

        removeClass(tabs, activeTab);

      } else {

        removeClass(tabs, activeTab);
        tab.classList.add(activeTab);

      }
    });
  });
};

const activateTabs = (tabs, activeTab, itemsContent, activeClass) => {
  Array.prototype.forEach.call(tabs, function (tab, i) {
    tab.addEventListener(`click`, function (evt) {
      evt.preventDefault();

      if (tabs) {
        removeClass(tabs, activeTab);
        tab.classList.add(activeTab);
      }

      if (itemsContent) {
        removeClass(itemsContent, activeClass);
        itemsContent[i].classList.add(activeClass);
      }
    });
  });
};


export {
  activateAccordion,
  removeClass,
  activateTabs
};
