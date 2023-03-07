// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from 'react';
import { PlasmicHomepage, DefaultHomepageProps } from './plasmic/tokens_poc_plugin/PlasmicHomepage';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
import Select__Option from './Select__Option';
import {handleEvent, dispatch} from '../helpers/uiMessageHandler';

export interface HomepageProps extends DefaultHomepageProps {}

function Homepage_(props: HomepageProps, ref: HTMLElementRefOf<'div'>) {

const [brand, setBrand] = React.useState('red');

handleEvent('brand', (e) => {
  setBrand(e);
});

  return <PlasmicHomepage root={{ ref }} {...props} 
   brand={{
    props:{
      children:[
        <Select__Option value="red" children="red" />,
        <Select__Option value="green" children="green" />,
        <Select__Option value="blue" children="blue" />,
      ],
      value: brand,
      onChange: (e) => {
        setBrand(e);
        dispatch('brand', e);
      }
    }
  }}
  product={{
    props:{
      children:[
        <Select__Option value="aaa" children="aaaa" />,
        <Select__Option value="bbb" children="bbbb" />,
      ]
    }
  }}
  platform={{
    props:{
      children:[
        <Select__Option value="zzzz" children="zzzzz" />,
      ]
    }
    
    
  }}/>;
}

const Homepage = React.forwardRef(Homepage_);
export default Homepage;
