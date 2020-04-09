import React, {Component} from 'react';
import { Record } from 'immutable';

export const maintenanceModel = Record({
    id: null,
    deviceId: null,
    entryDate: null,
    description: null,
    criticality: null,
    status: null
}, 'maintenanceModel')

export default maintenanceModel;