import { RightEnum, Room } from "../types/room.type";
import { randomBytes } from "crypto"
import { User } from "../types/user.type";
import { Song } from "../types/song.type";

let rooms: Room[] = []

type AddRoomProps = {
    roomName: string

    musicControl: RightEnum
    musicAdd: RightEnum
}

const add = ({roomName, musicControl, musicAdd}: AddRoomProps): Room => {
    const newRoom = {
        id: randomBytes(26).toString("hex"),
        name: roomName,

        musicAdd,
        musicControl,

        admin: <null>null,
        users: <User[]>[],

        songs: <Song[]>[]
    }

    rooms.push(newRoom)

    return newRoom
}

const get = (roomId: string) => {
    return rooms.filter(room => room.id === roomId)[0]
}

const RoomManager = {
    add,
    get
}

export default RoomManager
