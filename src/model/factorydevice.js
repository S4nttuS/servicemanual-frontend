import React, {Component} from 'react';
import { Record } from 'immutable';

export const factoryDeviceModel = Record({
    id: null,
    name: null,
    year: null,
    type: null
}, 'factoryDeviceModel')

export default factoryDeviceModel;