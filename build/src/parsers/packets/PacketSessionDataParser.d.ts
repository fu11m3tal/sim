/// <reference types="node" />
import { F1Parser } from '../F1Parser';
import { PacketSessionData } from './types';
export declare class PacketSessionDataParser extends F1Parser {
    data: PacketSessionData;
    constructor(buffer: Buffer, packetFormat: number);
}
