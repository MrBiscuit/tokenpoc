import * as React from 'react';
import { PlasmicSelect, DefaultSelectProps } from './plasmic/tokens_poc_plugin/PlasmicSelect';
import { SelectRef } from '@plasmicapp/react-web';
import Option from './Select__Option';
import OptionGroup from './Select__OptionGroup';

interface SelectProps extends DefaultSelectProps {}

function Select_(props: SelectProps, ref: SelectRef) {
  // @ts-ignore
  const { plasmicProps, state } = PlasmicSelect.useBehavior(props, ref);
  return <PlasmicSelect {...plasmicProps} />;
}

const Select = React.forwardRef(Select_);

export default Object.assign(Select, {
  Option,
  OptionGroup,
  __plumeType: 'select',
});
