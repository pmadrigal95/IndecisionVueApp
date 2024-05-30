import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter';

describe('Counter Component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount( Counter )
    })

    // Revisar que el componente no cambie atraves del tiempo
    // test('Debe de hacer match con el snapshot', () => {

    //     // Estandar = Wrapper
    //     // Simular eventos, clicks, etc
    //     const wrapper = shallowMount(Counter);

    //     expect(wrapper.html()).toMatchSnapshot();

    // });

    test('H2 debe de tener el valor por defecto "Counter"', () => {


        // const wrapper = shallowMount(Counter);
        
        // const h2 = wrapper.find('h2');

        // console.log(h2.text());

        // expect(h2.text()).toBe('Counter!');

        // expect(wrapper.find('h22').exists()).toBe(true);

        expect(wrapper.find('h2').exists()).toBeTruthy();

        const h2Value = wrapper.find('h2').text();
        expect(h2Value).toBe('Counter');
    });


    test('el valor por defecto debe de ser 100 en el p', () => {
        
        //wrapper

        //pTags

        // expect segundo p === 100

        // const wrapper = shallowMount(Counter);

        // const pTags = wrapper.findAll('p');

        const pValue = wrapper.find('[data-testid="counter"]');

        expect(pValue.exists()).toBeTruthy();
        expect(pValue.text()).toBe('100');


        // const pValue = pTags[1].text();
        // expect(pValue).toBe('100');

    });

    test('debe de incrementar y decrementar el contador', async () => {
        
        //Wrapper
        // const wrapper = shallowMount(Counter);

        const [increaseBtn, decreaseBtn] = wrapper.findAll('button');

        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');

        await decreaseBtn.trigger('click');
        await decreaseBtn.trigger('click');

        const pValue = wrapper.find('[data-testid="counter"]');

        expect(pValue.exists()).toBeTruthy();
        expect(pValue.text()).toBe('101');
    });

    test('debe de establecer el valor por defecto', () => {
        
        // console.log(wrapper.props());

        const { start } = wrapper.props();
        // const start = wrapper.props('start');

        // console.log(typeof start);

        const pValue = wrapper.find('[data-testid="counter"]').text();

        expect(Number(pValue)).toBe(start);


    });


    // Test aislado

    test('debe de mostrar la prop title', () => {

        const title = 'Hola Mundo';

        const wrapper = shallowMount(Counter, {
            props: {
                title
            }
        });

        expect(wrapper.find('h2').text()).toBe(title);
        
    });
})