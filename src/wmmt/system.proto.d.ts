import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace Sys. */
export namespace Sys {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Status. */
        interface IStatus {

            /** Status state */
            state: Sys.protobuf.State;

            /** Status name */
            name?: (string|null);

            /** Status address */
            address?: (number|null);

            /** Status value */
            value?: (number|null);

            /** Status value2 */
            value2?: (number|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: Sys.protobuf.IStatus);

            /** Status state. */
            public state: Sys.protobuf.State;

            /** Status name. */
            public name: string;

            /** Status address. */
            public address: number;

            /** Status value. */
            public value: number;

            /** Status value2. */
            public value2: number;

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: Sys.protobuf.IStatus): Sys.protobuf.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link Sys.protobuf.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Sys.protobuf.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link Sys.protobuf.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Sys.protobuf.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Sys.protobuf.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Sys.protobuf.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): Sys.protobuf.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Sys.protobuf.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Status
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Command. */
        interface ICommand {

            /** Command sequence */
            sequence?: (number|null);

            /** Command ntp */
            ntp?: (string|null);

            /** Command checkCable */
            checkCable?: (string|null);

            /** Command renewDhcp */
            renewDhcp?: (string|null);

            /** Command setDate */
            setDate?: (number|null);

            /** Command syncDate */
            syncDate?: (string|null);

            /** Command ping */
            ping?: (number[]|null);

            /** Command traceRoute */
            traceRoute?: (number|null);

            /** Command checkPacket */
            checkPacket?: (string|null);

            /** Command reboot */
            reboot?: (string|null);

            /** Command checkPkg */
            checkPkg?: (string|null);
        }

        /** Represents a Command. */
        class Command implements ICommand {

            /**
             * Constructs a new Command.
             * @param [properties] Properties to set
             */
            constructor(properties?: Sys.protobuf.ICommand);

            /** Command sequence. */
            public sequence: number;

            /** Command ntp. */
            public ntp: string;

            /** Command checkCable. */
            public checkCable: string;

            /** Command renewDhcp. */
            public renewDhcp: string;

            /** Command setDate. */
            public setDate: number;

            /** Command syncDate. */
            public syncDate: string;

            /** Command ping. */
            public ping: number[];

            /** Command traceRoute. */
            public traceRoute: number;

            /** Command checkPacket. */
            public checkPacket: string;

            /** Command reboot. */
            public reboot: string;

            /** Command checkPkg. */
            public checkPkg: string;

            /**
             * Creates a new Command instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Command instance
             */
            public static create(properties?: Sys.protobuf.ICommand): Sys.protobuf.Command;

            /**
             * Encodes the specified Command message. Does not implicitly {@link Sys.protobuf.Command.verify|verify} messages.
             * @param message Command message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Sys.protobuf.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Command message, length delimited. Does not implicitly {@link Sys.protobuf.Command.verify|verify} messages.
             * @param message Command message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Sys.protobuf.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Command message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Command
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Sys.protobuf.Command;

            /**
             * Decodes a Command message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Command
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Sys.protobuf.Command;

            /**
             * Verifies a Command message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Command message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Command
             */
            public static fromObject(object: { [k: string]: any }): Sys.protobuf.Command;

            /**
             * Creates a plain object from a Command message. Also converts values to other types if specified.
             * @param message Command
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Sys.protobuf.Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Command to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Command
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Reply. */
        interface IReply {

            /** Reply sequence */
            sequence?: (number|null);

            /** Reply ntp */
            ntp?: (Sys.protobuf.IStatus|null);

            /** Reply checkCable */
            checkCable?: (Sys.protobuf.IStatus|null);

            /** Reply renewDhcp */
            renewDhcp?: (Sys.protobuf.IStatus|null);

            /** Reply setDate */
            setDate?: (Sys.protobuf.IStatus|null);

            /** Reply syncDate */
            syncDate?: (Sys.protobuf.IStatus|null);

            /** Reply ping */
            ping?: (Sys.protobuf.IStatus[]|null);

            /** Reply traceRoute */
            traceRoute?: (Sys.protobuf.IStatus|null);

            /** Reply checkPacket */
            checkPacket?: (Sys.protobuf.IStatus|null);

            /** Reply reboot */
            reboot?: (Sys.protobuf.IStatus|null);

            /** Reply checkPkg */
            checkPkg?: (Sys.protobuf.IStatus|null);
        }

        /** Represents a Reply. */
        class Reply implements IReply {

            /**
             * Constructs a new Reply.
             * @param [properties] Properties to set
             */
            constructor(properties?: Sys.protobuf.IReply);

            /** Reply sequence. */
            public sequence: number;

            /** Reply ntp. */
            public ntp?: (Sys.protobuf.IStatus|null);

            /** Reply checkCable. */
            public checkCable?: (Sys.protobuf.IStatus|null);

            /** Reply renewDhcp. */
            public renewDhcp?: (Sys.protobuf.IStatus|null);

            /** Reply setDate. */
            public setDate?: (Sys.protobuf.IStatus|null);

            /** Reply syncDate. */
            public syncDate?: (Sys.protobuf.IStatus|null);

            /** Reply ping. */
            public ping: Sys.protobuf.IStatus[];

            /** Reply traceRoute. */
            public traceRoute?: (Sys.protobuf.IStatus|null);

            /** Reply checkPacket. */
            public checkPacket?: (Sys.protobuf.IStatus|null);

            /** Reply reboot. */
            public reboot?: (Sys.protobuf.IStatus|null);

            /** Reply checkPkg. */
            public checkPkg?: (Sys.protobuf.IStatus|null);

            /**
             * Creates a new Reply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Reply instance
             */
            public static create(properties?: Sys.protobuf.IReply): Sys.protobuf.Reply;

            /**
             * Encodes the specified Reply message. Does not implicitly {@link Sys.protobuf.Reply.verify|verify} messages.
             * @param message Reply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Sys.protobuf.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Reply message, length delimited. Does not implicitly {@link Sys.protobuf.Reply.verify|verify} messages.
             * @param message Reply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Sys.protobuf.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Reply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Reply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Sys.protobuf.Reply;

            /**
             * Decodes a Reply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Reply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Sys.protobuf.Reply;

            /**
             * Verifies a Reply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Reply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Reply
             */
            public static fromObject(object: { [k: string]: any }): Sys.protobuf.Reply;

            /**
             * Creates a plain object from a Reply message. Also converts values to other types if specified.
             * @param message Reply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Sys.protobuf.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Reply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Reply
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** State enum. */
        enum State {
            State_None = 0,
            State_Checking = 1,
            State_NG = 2,
            State_OK = 3
        }
    }
}
