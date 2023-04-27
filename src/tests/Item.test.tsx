import { render } from '@testing-library/react';
import Item from '../components/Item'
import { MemoryRouter } from 'react-router-dom';


describe("Item component", () => {
    test("render Item component", () => {
        const result = render(<Item 
            id="id1"
            image_url="image1"
            product_name="product1"
            size="size1"
            size_type="size_type_1"
            brand="brand1"
            description="description1"
            barcode="barcode1"
            manufacturer="manufacturer1"
            price="prict1"
            />, { wrapper: MemoryRouter })
        
        console.log(result.baseElement)
    });
  });