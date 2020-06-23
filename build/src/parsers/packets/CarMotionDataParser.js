"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarMotionDataParser = void 0;
const F1Parser_1 = require("../F1Parser");
class CarMotionDataParser extends F1Parser_1.F1Parser {
    constructor() {
        super();
        this.floatle('m_worldPositionX')
            .floatle('m_worldPositionY')
            .floatle('m_worldPositionZ')
            .floatle('m_worldVelocityX')
            .floatle('m_worldVelocityY')
            .floatle('m_worldVelocityZ')
            .uint16('m_worldForwardDirX')
            .uint16('m_worldForwardDirY')
            .uint16('m_worldForwardDirZ')
            .uint16('m_worldRightDirX')
            .uint16('m_worldRightDirY')
            .uint16('m_worldRightDirZ')
            .floatle('m_gForceLateral')
            .floatle('m_gForceLongitudinal')
            .floatle('m_gForceVertical')
            .floatle('m_yaw')
            .floatle('m_pitch')
            .floatle('m_roll');
    }
}
exports.CarMotionDataParser = CarMotionDataParser;
//# sourceMappingURL=CarMotionDataParser.js.map