import { MapWidget } from './MapWidget.js';
import { CarSelector } from './CarSelector.js';
import { NavMenu } from './NavMenu.js';

document.addEventListener('DOMContentLoaded', () => {
  new NavMenu();
  new MapWidget('mapContainer');
  new CarSelector({
    brandSelectId: 'brandSelect',
    modelSelectId: 'modelSelect',
    generationSelectId: 'generationSelect',
    engineSelectId: 'engineSelect',
    brandGroupId: 'brandGroup',
    modelGroupId: 'modelGroup',
    generationGroupId: 'generationGroup',
    engineGroupId: 'engineGroup',
    resultsId: 'results',
    servicesListId: 'servicesList',
  });
});
