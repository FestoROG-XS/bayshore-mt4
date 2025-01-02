/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const Sys = $root.Sys = (() => {

    /**
     * Namespace Sys.
     * @exports Sys
     * @namespace
     */
    const Sys = {};

    Sys.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof Sys
         * @namespace
         */
        const protobuf = {};

        protobuf.Status = (function() {

            /**
             * Properties of a Status.
             * @memberof Sys.protobuf
             * @interface IStatus
             * @property {Sys.protobuf.State} state Status state
             * @property {string|null} [name] Status name
             * @property {number|null} [address] Status address
             * @property {number|null} [value] Status value
             * @property {number|null} [value2] Status value2
             */

            /**
             * Constructs a new Status.
             * @memberof Sys.protobuf
             * @classdesc Represents a Status.
             * @implements IStatus
             * @constructor
             * @param {Sys.protobuf.IStatus=} [properties] Properties to set
             */
            function Status(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Status state.
             * @member {Sys.protobuf.State} state
             * @memberof Sys.protobuf.Status
             * @instance
             */
            Status.prototype.state = 0;

            /**
             * Status name.
             * @member {string} name
             * @memberof Sys.protobuf.Status
             * @instance
             */
            Status.prototype.name = "";

            /**
             * Status address.
             * @member {number} address
             * @memberof Sys.protobuf.Status
             * @instance
             */
            Status.prototype.address = 0;

            /**
             * Status value.
             * @member {number} value
             * @memberof Sys.protobuf.Status
             * @instance
             */
            Status.prototype.value = 0;

            /**
             * Status value2.
             * @member {number} value2
             * @memberof Sys.protobuf.Status
             * @instance
             */
            Status.prototype.value2 = 0;

            /**
             * Creates a new Status instance using the specified properties.
             * @function create
             * @memberof Sys.protobuf.Status
             * @static
             * @param {Sys.protobuf.IStatus=} [properties] Properties to set
             * @returns {Sys.protobuf.Status} Status instance
             */
            Status.create = function create(properties) {
                return new Status(properties);
            };

            /**
             * Encodes the specified Status message. Does not implicitly {@link Sys.protobuf.Status.verify|verify} messages.
             * @function encode
             * @memberof Sys.protobuf.Status
             * @static
             * @param {Sys.protobuf.IStatus} message Status message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Status.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.address);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.value);
                if (message.value2 != null && Object.hasOwnProperty.call(message, "value2"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.value2);
                return writer;
            };

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link Sys.protobuf.Status.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Sys.protobuf.Status
             * @static
             * @param {Sys.protobuf.IStatus} message Status message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Status.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @function decode
             * @memberof Sys.protobuf.Status
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Sys.protobuf.Status} Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Status.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Sys.protobuf.Status();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.state = reader.int32();
                            break;
                        }
                    case 2: {
                            message.name = reader.string();
                            break;
                        }
                    case 3: {
                            message.address = reader.uint32();
                            break;
                        }
                    case 4: {
                            message.value = reader.int32();
                            break;
                        }
                    case 5: {
                            message.value2 = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("state"))
                    throw $util.ProtocolError("missing required 'state'", { instance: message });
                return message;
            };

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Sys.protobuf.Status
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Sys.protobuf.Status} Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Status.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Status message.
             * @function verify
             * @memberof Sys.protobuf.Status
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Status.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.address != null && message.hasOwnProperty("address"))
                    if (!$util.isInteger(message.address))
                        return "address: integer expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                if (message.value2 != null && message.hasOwnProperty("value2"))
                    if (!$util.isInteger(message.value2))
                        return "value2: integer expected";
                return null;
            };

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Sys.protobuf.Status
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Sys.protobuf.Status} Status
             */
            Status.fromObject = function fromObject(object) {
                if (object instanceof $root.Sys.protobuf.Status)
                    return object;
                let message = new $root.Sys.protobuf.Status();
                switch (object.state) {
                default:
                    if (typeof object.state === "number") {
                        message.state = object.state;
                        break;
                    }
                    break;
                case "State_None":
                case 0:
                    message.state = 0;
                    break;
                case "State_Checking":
                case 1:
                    message.state = 1;
                    break;
                case "State_NG":
                case 2:
                    message.state = 2;
                    break;
                case "State_OK":
                case 3:
                    message.state = 3;
                    break;
                }
                if (object.name != null)
                    message.name = String(object.name);
                if (object.address != null)
                    message.address = object.address >>> 0;
                if (object.value != null)
                    message.value = object.value | 0;
                if (object.value2 != null)
                    message.value2 = object.value2 | 0;
                return message;
            };

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Sys.protobuf.Status
             * @static
             * @param {Sys.protobuf.Status} message Status
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Status.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.state = options.enums === String ? "State_None" : 0;
                    object.name = "";
                    object.address = 0;
                    object.value = 0;
                    object.value2 = 0;
                }
                if (message.state != null && message.hasOwnProperty("state"))
                    object.state = options.enums === String ? $root.Sys.protobuf.State[message.state] === undefined ? message.state : $root.Sys.protobuf.State[message.state] : message.state;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.address != null && message.hasOwnProperty("address"))
                    object.address = message.address;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                if (message.value2 != null && message.hasOwnProperty("value2"))
                    object.value2 = message.value2;
                return object;
            };

            /**
             * Converts this Status to JSON.
             * @function toJSON
             * @memberof Sys.protobuf.Status
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Status.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Status
             * @function getTypeUrl
             * @memberof Sys.protobuf.Status
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Status.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Sys.protobuf.Status";
            };

            return Status;
        })();

        protobuf.Command = (function() {

            /**
             * Properties of a Command.
             * @memberof Sys.protobuf
             * @interface ICommand
             * @property {number|null} [sequence] Command sequence
             * @property {string|null} [ntp] Command ntp
             * @property {string|null} [checkCable] Command checkCable
             * @property {string|null} [renewDhcp] Command renewDhcp
             * @property {number|null} [setDate] Command setDate
             * @property {string|null} [syncDate] Command syncDate
             * @property {Array.<number>|null} [ping] Command ping
             * @property {number|null} [traceRoute] Command traceRoute
             * @property {string|null} [checkPacket] Command checkPacket
             * @property {string|null} [reboot] Command reboot
             * @property {string|null} [checkPkg] Command checkPkg
             */

            /**
             * Constructs a new Command.
             * @memberof Sys.protobuf
             * @classdesc Represents a Command.
             * @implements ICommand
             * @constructor
             * @param {Sys.protobuf.ICommand=} [properties] Properties to set
             */
            function Command(properties) {
                this.ping = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Command sequence.
             * @member {number} sequence
             * @memberof Sys.protobuf.Command
             * @instance
             */
            Command.prototype.sequence = 0;

            /**
             * Command ntp.
             * @member {string} ntp
             * @memberof Sys.protobuf.Command
             * @instance
             */
            Command.prototype.ntp = "";

            /**
             * Command checkCable.
             * @member {string} checkCable
             * @memberof Sys.protobuf.Command
             * @instance
             */
            Command.prototype.checkCable = "";

            /**
             * Command renewDhcp.
             * @member {string} renewDhcp
             * @memberof Sys.protobuf.Command
             * @instance
             */
            Command.prototype.renewDhcp = "";

            /**
             * Command setDate.
             * @member {number} setDate
             * @memberof Sys.protobuf.Command
             * @instance
             */
            Command.prototype.setDate = 0;

            /**
             * Command syncDate.
             * @member {string} syncDate
             * @memberof Sys.protobuf.Command
             * @instance
             */
            Command.prototype.syncDate = "";

            /**
             * Command ping.
             * @member {Array.<number>} ping
             * @memberof Sys.protobuf.Command
             * @instance
             */
            Command.prototype.ping = $util.emptyArray;

            /**
             * Command traceRoute.
             * @member {number} traceRoute
             * @memberof Sys.protobuf.Command
             * @instance
             */
            Command.prototype.traceRoute = 0;

            /**
             * Command checkPacket.
             * @member {string} checkPacket
             * @memberof Sys.protobuf.Command
             * @instance
             */
            Command.prototype.checkPacket = "";

            /**
             * Command reboot.
             * @member {string} reboot
             * @memberof Sys.protobuf.Command
             * @instance
             */
            Command.prototype.reboot = "";

            /**
             * Command checkPkg.
             * @member {string} checkPkg
             * @memberof Sys.protobuf.Command
             * @instance
             */
            Command.prototype.checkPkg = "";

            /**
             * Creates a new Command instance using the specified properties.
             * @function create
             * @memberof Sys.protobuf.Command
             * @static
             * @param {Sys.protobuf.ICommand=} [properties] Properties to set
             * @returns {Sys.protobuf.Command} Command instance
             */
            Command.create = function create(properties) {
                return new Command(properties);
            };

            /**
             * Encodes the specified Command message. Does not implicitly {@link Sys.protobuf.Command.verify|verify} messages.
             * @function encode
             * @memberof Sys.protobuf.Command
             * @static
             * @param {Sys.protobuf.ICommand} message Command message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Command.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.sequence != null && Object.hasOwnProperty.call(message, "sequence"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.sequence);
                if (message.ntp != null && Object.hasOwnProperty.call(message, "ntp"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.ntp);
                if (message.checkCable != null && Object.hasOwnProperty.call(message, "checkCable"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.checkCable);
                if (message.renewDhcp != null && Object.hasOwnProperty.call(message, "renewDhcp"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.renewDhcp);
                if (message.setDate != null && Object.hasOwnProperty.call(message, "setDate"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.setDate);
                if (message.syncDate != null && Object.hasOwnProperty.call(message, "syncDate"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.syncDate);
                if (message.ping != null && message.ping.length)
                    for (let i = 0; i < message.ping.length; ++i)
                        writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.ping[i]);
                if (message.traceRoute != null && Object.hasOwnProperty.call(message, "traceRoute"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.traceRoute);
                if (message.checkPacket != null && Object.hasOwnProperty.call(message, "checkPacket"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.checkPacket);
                if (message.reboot != null && Object.hasOwnProperty.call(message, "reboot"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.reboot);
                if (message.checkPkg != null && Object.hasOwnProperty.call(message, "checkPkg"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.checkPkg);
                return writer;
            };

            /**
             * Encodes the specified Command message, length delimited. Does not implicitly {@link Sys.protobuf.Command.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Sys.protobuf.Command
             * @static
             * @param {Sys.protobuf.ICommand} message Command message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Command.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Command message from the specified reader or buffer.
             * @function decode
             * @memberof Sys.protobuf.Command
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Sys.protobuf.Command} Command
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Command.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Sys.protobuf.Command();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.sequence = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.ntp = reader.string();
                            break;
                        }
                    case 3: {
                            message.checkCable = reader.string();
                            break;
                        }
                    case 4: {
                            message.renewDhcp = reader.string();
                            break;
                        }
                    case 5: {
                            message.setDate = reader.uint32();
                            break;
                        }
                    case 6: {
                            message.syncDate = reader.string();
                            break;
                        }
                    case 7: {
                            if (!(message.ping && message.ping.length))
                                message.ping = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.ping.push(reader.uint32());
                            } else
                                message.ping.push(reader.uint32());
                            break;
                        }
                    case 8: {
                            message.traceRoute = reader.uint32();
                            break;
                        }
                    case 9: {
                            message.checkPacket = reader.string();
                            break;
                        }
                    case 10: {
                            message.reboot = reader.string();
                            break;
                        }
                    case 11: {
                            message.checkPkg = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Command message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Sys.protobuf.Command
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Sys.protobuf.Command} Command
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Command.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Command message.
             * @function verify
             * @memberof Sys.protobuf.Command
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Command.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.sequence != null && message.hasOwnProperty("sequence"))
                    if (!$util.isInteger(message.sequence))
                        return "sequence: integer expected";
                if (message.ntp != null && message.hasOwnProperty("ntp"))
                    if (!$util.isString(message.ntp))
                        return "ntp: string expected";
                if (message.checkCable != null && message.hasOwnProperty("checkCable"))
                    if (!$util.isString(message.checkCable))
                        return "checkCable: string expected";
                if (message.renewDhcp != null && message.hasOwnProperty("renewDhcp"))
                    if (!$util.isString(message.renewDhcp))
                        return "renewDhcp: string expected";
                if (message.setDate != null && message.hasOwnProperty("setDate"))
                    if (!$util.isInteger(message.setDate))
                        return "setDate: integer expected";
                if (message.syncDate != null && message.hasOwnProperty("syncDate"))
                    if (!$util.isString(message.syncDate))
                        return "syncDate: string expected";
                if (message.ping != null && message.hasOwnProperty("ping")) {
                    if (!Array.isArray(message.ping))
                        return "ping: array expected";
                    for (let i = 0; i < message.ping.length; ++i)
                        if (!$util.isInteger(message.ping[i]))
                            return "ping: integer[] expected";
                }
                if (message.traceRoute != null && message.hasOwnProperty("traceRoute"))
                    if (!$util.isInteger(message.traceRoute))
                        return "traceRoute: integer expected";
                if (message.checkPacket != null && message.hasOwnProperty("checkPacket"))
                    if (!$util.isString(message.checkPacket))
                        return "checkPacket: string expected";
                if (message.reboot != null && message.hasOwnProperty("reboot"))
                    if (!$util.isString(message.reboot))
                        return "reboot: string expected";
                if (message.checkPkg != null && message.hasOwnProperty("checkPkg"))
                    if (!$util.isString(message.checkPkg))
                        return "checkPkg: string expected";
                return null;
            };

            /**
             * Creates a Command message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Sys.protobuf.Command
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Sys.protobuf.Command} Command
             */
            Command.fromObject = function fromObject(object) {
                if (object instanceof $root.Sys.protobuf.Command)
                    return object;
                let message = new $root.Sys.protobuf.Command();
                if (object.sequence != null)
                    message.sequence = object.sequence >>> 0;
                if (object.ntp != null)
                    message.ntp = String(object.ntp);
                if (object.checkCable != null)
                    message.checkCable = String(object.checkCable);
                if (object.renewDhcp != null)
                    message.renewDhcp = String(object.renewDhcp);
                if (object.setDate != null)
                    message.setDate = object.setDate >>> 0;
                if (object.syncDate != null)
                    message.syncDate = String(object.syncDate);
                if (object.ping) {
                    if (!Array.isArray(object.ping))
                        throw TypeError(".Sys.protobuf.Command.ping: array expected");
                    message.ping = [];
                    for (let i = 0; i < object.ping.length; ++i)
                        message.ping[i] = object.ping[i] >>> 0;
                }
                if (object.traceRoute != null)
                    message.traceRoute = object.traceRoute >>> 0;
                if (object.checkPacket != null)
                    message.checkPacket = String(object.checkPacket);
                if (object.reboot != null)
                    message.reboot = String(object.reboot);
                if (object.checkPkg != null)
                    message.checkPkg = String(object.checkPkg);
                return message;
            };

            /**
             * Creates a plain object from a Command message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Sys.protobuf.Command
             * @static
             * @param {Sys.protobuf.Command} message Command
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Command.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.ping = [];
                if (options.defaults) {
                    object.sequence = 0;
                    object.ntp = "";
                    object.checkCable = "";
                    object.renewDhcp = "";
                    object.setDate = 0;
                    object.syncDate = "";
                    object.traceRoute = 0;
                    object.checkPacket = "";
                    object.reboot = "";
                    object.checkPkg = "";
                }
                if (message.sequence != null && message.hasOwnProperty("sequence"))
                    object.sequence = message.sequence;
                if (message.ntp != null && message.hasOwnProperty("ntp"))
                    object.ntp = message.ntp;
                if (message.checkCable != null && message.hasOwnProperty("checkCable"))
                    object.checkCable = message.checkCable;
                if (message.renewDhcp != null && message.hasOwnProperty("renewDhcp"))
                    object.renewDhcp = message.renewDhcp;
                if (message.setDate != null && message.hasOwnProperty("setDate"))
                    object.setDate = message.setDate;
                if (message.syncDate != null && message.hasOwnProperty("syncDate"))
                    object.syncDate = message.syncDate;
                if (message.ping && message.ping.length) {
                    object.ping = [];
                    for (let j = 0; j < message.ping.length; ++j)
                        object.ping[j] = message.ping[j];
                }
                if (message.traceRoute != null && message.hasOwnProperty("traceRoute"))
                    object.traceRoute = message.traceRoute;
                if (message.checkPacket != null && message.hasOwnProperty("checkPacket"))
                    object.checkPacket = message.checkPacket;
                if (message.reboot != null && message.hasOwnProperty("reboot"))
                    object.reboot = message.reboot;
                if (message.checkPkg != null && message.hasOwnProperty("checkPkg"))
                    object.checkPkg = message.checkPkg;
                return object;
            };

            /**
             * Converts this Command to JSON.
             * @function toJSON
             * @memberof Sys.protobuf.Command
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Command.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Command
             * @function getTypeUrl
             * @memberof Sys.protobuf.Command
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Command.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Sys.protobuf.Command";
            };

            return Command;
        })();

        protobuf.Reply = (function() {

            /**
             * Properties of a Reply.
             * @memberof Sys.protobuf
             * @interface IReply
             * @property {number|null} [sequence] Reply sequence
             * @property {Sys.protobuf.IStatus|null} [ntp] Reply ntp
             * @property {Sys.protobuf.IStatus|null} [checkCable] Reply checkCable
             * @property {Sys.protobuf.IStatus|null} [renewDhcp] Reply renewDhcp
             * @property {Sys.protobuf.IStatus|null} [setDate] Reply setDate
             * @property {Sys.protobuf.IStatus|null} [syncDate] Reply syncDate
             * @property {Array.<Sys.protobuf.IStatus>|null} [ping] Reply ping
             * @property {Sys.protobuf.IStatus|null} [traceRoute] Reply traceRoute
             * @property {Sys.protobuf.IStatus|null} [checkPacket] Reply checkPacket
             * @property {Sys.protobuf.IStatus|null} [reboot] Reply reboot
             * @property {Sys.protobuf.IStatus|null} [checkPkg] Reply checkPkg
             */

            /**
             * Constructs a new Reply.
             * @memberof Sys.protobuf
             * @classdesc Represents a Reply.
             * @implements IReply
             * @constructor
             * @param {Sys.protobuf.IReply=} [properties] Properties to set
             */
            function Reply(properties) {
                this.ping = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Reply sequence.
             * @member {number} sequence
             * @memberof Sys.protobuf.Reply
             * @instance
             */
            Reply.prototype.sequence = 0;

            /**
             * Reply ntp.
             * @member {Sys.protobuf.IStatus|null|undefined} ntp
             * @memberof Sys.protobuf.Reply
             * @instance
             */
            Reply.prototype.ntp = null;

            /**
             * Reply checkCable.
             * @member {Sys.protobuf.IStatus|null|undefined} checkCable
             * @memberof Sys.protobuf.Reply
             * @instance
             */
            Reply.prototype.checkCable = null;

            /**
             * Reply renewDhcp.
             * @member {Sys.protobuf.IStatus|null|undefined} renewDhcp
             * @memberof Sys.protobuf.Reply
             * @instance
             */
            Reply.prototype.renewDhcp = null;

            /**
             * Reply setDate.
             * @member {Sys.protobuf.IStatus|null|undefined} setDate
             * @memberof Sys.protobuf.Reply
             * @instance
             */
            Reply.prototype.setDate = null;

            /**
             * Reply syncDate.
             * @member {Sys.protobuf.IStatus|null|undefined} syncDate
             * @memberof Sys.protobuf.Reply
             * @instance
             */
            Reply.prototype.syncDate = null;

            /**
             * Reply ping.
             * @member {Array.<Sys.protobuf.IStatus>} ping
             * @memberof Sys.protobuf.Reply
             * @instance
             */
            Reply.prototype.ping = $util.emptyArray;

            /**
             * Reply traceRoute.
             * @member {Sys.protobuf.IStatus|null|undefined} traceRoute
             * @memberof Sys.protobuf.Reply
             * @instance
             */
            Reply.prototype.traceRoute = null;

            /**
             * Reply checkPacket.
             * @member {Sys.protobuf.IStatus|null|undefined} checkPacket
             * @memberof Sys.protobuf.Reply
             * @instance
             */
            Reply.prototype.checkPacket = null;

            /**
             * Reply reboot.
             * @member {Sys.protobuf.IStatus|null|undefined} reboot
             * @memberof Sys.protobuf.Reply
             * @instance
             */
            Reply.prototype.reboot = null;

            /**
             * Reply checkPkg.
             * @member {Sys.protobuf.IStatus|null|undefined} checkPkg
             * @memberof Sys.protobuf.Reply
             * @instance
             */
            Reply.prototype.checkPkg = null;

            /**
             * Creates a new Reply instance using the specified properties.
             * @function create
             * @memberof Sys.protobuf.Reply
             * @static
             * @param {Sys.protobuf.IReply=} [properties] Properties to set
             * @returns {Sys.protobuf.Reply} Reply instance
             */
            Reply.create = function create(properties) {
                return new Reply(properties);
            };

            /**
             * Encodes the specified Reply message. Does not implicitly {@link Sys.protobuf.Reply.verify|verify} messages.
             * @function encode
             * @memberof Sys.protobuf.Reply
             * @static
             * @param {Sys.protobuf.IReply} message Reply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Reply.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.sequence != null && Object.hasOwnProperty.call(message, "sequence"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.sequence);
                if (message.ntp != null && Object.hasOwnProperty.call(message, "ntp"))
                    $root.Sys.protobuf.Status.encode(message.ntp, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.checkCable != null && Object.hasOwnProperty.call(message, "checkCable"))
                    $root.Sys.protobuf.Status.encode(message.checkCable, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.renewDhcp != null && Object.hasOwnProperty.call(message, "renewDhcp"))
                    $root.Sys.protobuf.Status.encode(message.renewDhcp, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.setDate != null && Object.hasOwnProperty.call(message, "setDate"))
                    $root.Sys.protobuf.Status.encode(message.setDate, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.syncDate != null && Object.hasOwnProperty.call(message, "syncDate"))
                    $root.Sys.protobuf.Status.encode(message.syncDate, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.ping != null && message.ping.length)
                    for (let i = 0; i < message.ping.length; ++i)
                        $root.Sys.protobuf.Status.encode(message.ping[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.traceRoute != null && Object.hasOwnProperty.call(message, "traceRoute"))
                    $root.Sys.protobuf.Status.encode(message.traceRoute, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.checkPacket != null && Object.hasOwnProperty.call(message, "checkPacket"))
                    $root.Sys.protobuf.Status.encode(message.checkPacket, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.reboot != null && Object.hasOwnProperty.call(message, "reboot"))
                    $root.Sys.protobuf.Status.encode(message.reboot, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                if (message.checkPkg != null && Object.hasOwnProperty.call(message, "checkPkg"))
                    $root.Sys.protobuf.Status.encode(message.checkPkg, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Reply message, length delimited. Does not implicitly {@link Sys.protobuf.Reply.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Sys.protobuf.Reply
             * @static
             * @param {Sys.protobuf.IReply} message Reply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Reply.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Reply message from the specified reader or buffer.
             * @function decode
             * @memberof Sys.protobuf.Reply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Sys.protobuf.Reply} Reply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Reply.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Sys.protobuf.Reply();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.sequence = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.ntp = $root.Sys.protobuf.Status.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.checkCable = $root.Sys.protobuf.Status.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.renewDhcp = $root.Sys.protobuf.Status.decode(reader, reader.uint32());
                            break;
                        }
                    case 5: {
                            message.setDate = $root.Sys.protobuf.Status.decode(reader, reader.uint32());
                            break;
                        }
                    case 6: {
                            message.syncDate = $root.Sys.protobuf.Status.decode(reader, reader.uint32());
                            break;
                        }
                    case 7: {
                            if (!(message.ping && message.ping.length))
                                message.ping = [];
                            message.ping.push($root.Sys.protobuf.Status.decode(reader, reader.uint32()));
                            break;
                        }
                    case 8: {
                            message.traceRoute = $root.Sys.protobuf.Status.decode(reader, reader.uint32());
                            break;
                        }
                    case 9: {
                            message.checkPacket = $root.Sys.protobuf.Status.decode(reader, reader.uint32());
                            break;
                        }
                    case 10: {
                            message.reboot = $root.Sys.protobuf.Status.decode(reader, reader.uint32());
                            break;
                        }
                    case 11: {
                            message.checkPkg = $root.Sys.protobuf.Status.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Reply message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Sys.protobuf.Reply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Sys.protobuf.Reply} Reply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Reply.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Reply message.
             * @function verify
             * @memberof Sys.protobuf.Reply
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Reply.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.sequence != null && message.hasOwnProperty("sequence"))
                    if (!$util.isInteger(message.sequence))
                        return "sequence: integer expected";
                if (message.ntp != null && message.hasOwnProperty("ntp")) {
                    let error = $root.Sys.protobuf.Status.verify(message.ntp);
                    if (error)
                        return "ntp." + error;
                }
                if (message.checkCable != null && message.hasOwnProperty("checkCable")) {
                    let error = $root.Sys.protobuf.Status.verify(message.checkCable);
                    if (error)
                        return "checkCable." + error;
                }
                if (message.renewDhcp != null && message.hasOwnProperty("renewDhcp")) {
                    let error = $root.Sys.protobuf.Status.verify(message.renewDhcp);
                    if (error)
                        return "renewDhcp." + error;
                }
                if (message.setDate != null && message.hasOwnProperty("setDate")) {
                    let error = $root.Sys.protobuf.Status.verify(message.setDate);
                    if (error)
                        return "setDate." + error;
                }
                if (message.syncDate != null && message.hasOwnProperty("syncDate")) {
                    let error = $root.Sys.protobuf.Status.verify(message.syncDate);
                    if (error)
                        return "syncDate." + error;
                }
                if (message.ping != null && message.hasOwnProperty("ping")) {
                    if (!Array.isArray(message.ping))
                        return "ping: array expected";
                    for (let i = 0; i < message.ping.length; ++i) {
                        let error = $root.Sys.protobuf.Status.verify(message.ping[i]);
                        if (error)
                            return "ping." + error;
                    }
                }
                if (message.traceRoute != null && message.hasOwnProperty("traceRoute")) {
                    let error = $root.Sys.protobuf.Status.verify(message.traceRoute);
                    if (error)
                        return "traceRoute." + error;
                }
                if (message.checkPacket != null && message.hasOwnProperty("checkPacket")) {
                    let error = $root.Sys.protobuf.Status.verify(message.checkPacket);
                    if (error)
                        return "checkPacket." + error;
                }
                if (message.reboot != null && message.hasOwnProperty("reboot")) {
                    let error = $root.Sys.protobuf.Status.verify(message.reboot);
                    if (error)
                        return "reboot." + error;
                }
                if (message.checkPkg != null && message.hasOwnProperty("checkPkg")) {
                    let error = $root.Sys.protobuf.Status.verify(message.checkPkg);
                    if (error)
                        return "checkPkg." + error;
                }
                return null;
            };

            /**
             * Creates a Reply message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Sys.protobuf.Reply
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Sys.protobuf.Reply} Reply
             */
            Reply.fromObject = function fromObject(object) {
                if (object instanceof $root.Sys.protobuf.Reply)
                    return object;
                let message = new $root.Sys.protobuf.Reply();
                if (object.sequence != null)
                    message.sequence = object.sequence >>> 0;
                if (object.ntp != null) {
                    if (typeof object.ntp !== "object")
                        throw TypeError(".Sys.protobuf.Reply.ntp: object expected");
                    message.ntp = $root.Sys.protobuf.Status.fromObject(object.ntp);
                }
                if (object.checkCable != null) {
                    if (typeof object.checkCable !== "object")
                        throw TypeError(".Sys.protobuf.Reply.checkCable: object expected");
                    message.checkCable = $root.Sys.protobuf.Status.fromObject(object.checkCable);
                }
                if (object.renewDhcp != null) {
                    if (typeof object.renewDhcp !== "object")
                        throw TypeError(".Sys.protobuf.Reply.renewDhcp: object expected");
                    message.renewDhcp = $root.Sys.protobuf.Status.fromObject(object.renewDhcp);
                }
                if (object.setDate != null) {
                    if (typeof object.setDate !== "object")
                        throw TypeError(".Sys.protobuf.Reply.setDate: object expected");
                    message.setDate = $root.Sys.protobuf.Status.fromObject(object.setDate);
                }
                if (object.syncDate != null) {
                    if (typeof object.syncDate !== "object")
                        throw TypeError(".Sys.protobuf.Reply.syncDate: object expected");
                    message.syncDate = $root.Sys.protobuf.Status.fromObject(object.syncDate);
                }
                if (object.ping) {
                    if (!Array.isArray(object.ping))
                        throw TypeError(".Sys.protobuf.Reply.ping: array expected");
                    message.ping = [];
                    for (let i = 0; i < object.ping.length; ++i) {
                        if (typeof object.ping[i] !== "object")
                            throw TypeError(".Sys.protobuf.Reply.ping: object expected");
                        message.ping[i] = $root.Sys.protobuf.Status.fromObject(object.ping[i]);
                    }
                }
                if (object.traceRoute != null) {
                    if (typeof object.traceRoute !== "object")
                        throw TypeError(".Sys.protobuf.Reply.traceRoute: object expected");
                    message.traceRoute = $root.Sys.protobuf.Status.fromObject(object.traceRoute);
                }
                if (object.checkPacket != null) {
                    if (typeof object.checkPacket !== "object")
                        throw TypeError(".Sys.protobuf.Reply.checkPacket: object expected");
                    message.checkPacket = $root.Sys.protobuf.Status.fromObject(object.checkPacket);
                }
                if (object.reboot != null) {
                    if (typeof object.reboot !== "object")
                        throw TypeError(".Sys.protobuf.Reply.reboot: object expected");
                    message.reboot = $root.Sys.protobuf.Status.fromObject(object.reboot);
                }
                if (object.checkPkg != null) {
                    if (typeof object.checkPkg !== "object")
                        throw TypeError(".Sys.protobuf.Reply.checkPkg: object expected");
                    message.checkPkg = $root.Sys.protobuf.Status.fromObject(object.checkPkg);
                }
                return message;
            };

            /**
             * Creates a plain object from a Reply message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Sys.protobuf.Reply
             * @static
             * @param {Sys.protobuf.Reply} message Reply
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Reply.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.ping = [];
                if (options.defaults) {
                    object.sequence = 0;
                    object.ntp = null;
                    object.checkCable = null;
                    object.renewDhcp = null;
                    object.setDate = null;
                    object.syncDate = null;
                    object.traceRoute = null;
                    object.checkPacket = null;
                    object.reboot = null;
                    object.checkPkg = null;
                }
                if (message.sequence != null && message.hasOwnProperty("sequence"))
                    object.sequence = message.sequence;
                if (message.ntp != null && message.hasOwnProperty("ntp"))
                    object.ntp = $root.Sys.protobuf.Status.toObject(message.ntp, options);
                if (message.checkCable != null && message.hasOwnProperty("checkCable"))
                    object.checkCable = $root.Sys.protobuf.Status.toObject(message.checkCable, options);
                if (message.renewDhcp != null && message.hasOwnProperty("renewDhcp"))
                    object.renewDhcp = $root.Sys.protobuf.Status.toObject(message.renewDhcp, options);
                if (message.setDate != null && message.hasOwnProperty("setDate"))
                    object.setDate = $root.Sys.protobuf.Status.toObject(message.setDate, options);
                if (message.syncDate != null && message.hasOwnProperty("syncDate"))
                    object.syncDate = $root.Sys.protobuf.Status.toObject(message.syncDate, options);
                if (message.ping && message.ping.length) {
                    object.ping = [];
                    for (let j = 0; j < message.ping.length; ++j)
                        object.ping[j] = $root.Sys.protobuf.Status.toObject(message.ping[j], options);
                }
                if (message.traceRoute != null && message.hasOwnProperty("traceRoute"))
                    object.traceRoute = $root.Sys.protobuf.Status.toObject(message.traceRoute, options);
                if (message.checkPacket != null && message.hasOwnProperty("checkPacket"))
                    object.checkPacket = $root.Sys.protobuf.Status.toObject(message.checkPacket, options);
                if (message.reboot != null && message.hasOwnProperty("reboot"))
                    object.reboot = $root.Sys.protobuf.Status.toObject(message.reboot, options);
                if (message.checkPkg != null && message.hasOwnProperty("checkPkg"))
                    object.checkPkg = $root.Sys.protobuf.Status.toObject(message.checkPkg, options);
                return object;
            };

            /**
             * Converts this Reply to JSON.
             * @function toJSON
             * @memberof Sys.protobuf.Reply
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Reply.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Reply
             * @function getTypeUrl
             * @memberof Sys.protobuf.Reply
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Sys.protobuf.Reply";
            };

            return Reply;
        })();

        /**
         * State enum.
         * @name Sys.protobuf.State
         * @enum {number}
         * @property {number} State_None=0 State_None value
         * @property {number} State_Checking=1 State_Checking value
         * @property {number} State_NG=2 State_NG value
         * @property {number} State_OK=3 State_OK value
         */
        protobuf.State = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "State_None"] = 0;
            values[valuesById[1] = "State_Checking"] = 1;
            values[valuesById[2] = "State_NG"] = 2;
            values[valuesById[3] = "State_OK"] = 3;
            return values;
        })();

        return protobuf;
    })();

    return Sys;
})();

export { $root as default };
