/// <reference types="node" />
import { F1Parser } from '../F1Parser';
import { PacketParticipantsData } from './types';
export declare class PacketParticipantsDataParser extends F1Parser {
    data: PacketParticipantsData;
    constructor(buffer: Buffer, packetFormat: number);
}
