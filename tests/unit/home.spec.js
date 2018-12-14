import { shallowMount } from '@vue/test-utils';
import Home from '@/components/Home.vue';
import flushPromises from 'flush-promises';

import http from '@/services/http.js';
const spyHttp = jest.spyOn(http, 'search');

const mockResults = [
  { id: 1, name: 'Game of thrones' },
  { id: 2, name: 'Vikings' },
  { id: 3, name: 'Banshee' }
];

describe('Home.vue', () => {

  let wrapper;

  beforeEach(() => {
    spyHttp.mockReset().mockReturnValue(Promise.resolve(mockResults))
    wrapper = shallowMount(Home)
    
  })

  it('Get some results when input is set and button is clicked', async () => {
    let searchTerm = 'test123'
    let search = wrapper.find('#search');
    search.setValue(searchTerm) ;
    let button = wrapper.find('form button');
    button.trigger('click');
    await flushPromises();
    
    expect(spyHttp).toHaveBeenCalledTimes(1);
    expect(wrapper.vm.searchTerm).toBe(searchTerm);
    expect(wrapper.vm.shows.length).toBe(mockResults.length);
  });

  it('Should not invoke http service when search field is empty', async () => {
    let button = wrapper.find('form button');
    button.trigger('click');
    await flushPromises();
    
    expect(spyHttp).toHaveBeenCalledTimes(0);
    expect(wrapper.vm.searchTerm).toBe('');
    expect(wrapper.vm.shows.length).toBe(0);
  });

})