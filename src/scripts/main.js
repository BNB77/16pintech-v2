import { MapWidget } from './MapWidget.js';
import { CarSelector } from './CarSelector.js';
import { NavMenu } from './NavMenu.js';
import { BookingModal } from './BookingModal.js';
import { PriceCalc } from './PriceCalc.js';

document.addEventListener('DOMContentLoaded', () => {
  new NavMenu();
  new MapWidget('mapContainer');

  const modal = new BookingModal('bookingModal');
  document.getElementById('bookingTrigger').addEventListener('click', () => modal.open());
  document.getElementById('modalCloseSuccess')?.addEventListener('click', () => modal.close());

  const calc = new PriceCalc('calcModal');
  document.getElementById('calcTrigger').addEventListener('click', () => calc.open());

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
