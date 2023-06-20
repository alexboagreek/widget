import { startWidget } from "../modules/widgetService.js";

const initWidget = (app) => {
  const widget = startWidget();

  app.append(widget);
  console.log('Working...');

};

initWidget(document.querySelector('#app'));