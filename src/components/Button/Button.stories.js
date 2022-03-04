import React, { Children } from 'react'
import Button from './Button'
// import Center from '../Center/Center'
import {action,actions} from '@storybook/addon-actions'
import {text,boolean} from '@storybook/addon-knobs'
export default{
    title:'Button',
    component:Button,
    // decorators:[story=><Center>{story()}</Center>]
}

export const Primary = ()=><Button onClick={action('Click Handler')} variant='primary'>Primary</Button>
export const Secondary = ()=><Button onClick={()=>console.log('Secondary Button clicked')} variant='secondary'>Secondary</Button>
export const Success = ()=><Button variant='success'>Success</Button>
export const Danger = ()=><Button variant='danger'>Danger</Button>

export const Log = ()=>(
    <Button variant='primary' onClick={()=>console.log('Button clicked',process.env.STORYBOOK_THEME)}>Log</Button>
)

export const Knobs = ()=>(
    <Button disabled={boolean('Disabled',false)}>
        {text('Label','Button Label')}
    </Button>
)

const Template = args => <Button {...args}/>

export const PrimaryA = Template.bind({})

PrimaryA.args={ 
        variant: 'primary',
        children:'Primary Args'
}

export const LongPrimaryA = Template.bind({})

LongPrimaryA.args={
  ...PrimaryA.args,
  children:'Long Primary Args'
}

export const SecondaryA = Template.bind({})

SecondaryA.args={
    variant:'secondary',
    children:'Secondary Args'
}