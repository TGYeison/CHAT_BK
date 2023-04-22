
/**
 * Models
 */
import  Chat from './models/chat'
import { msg } from './models/webtokent';

export default (oi:any) => {
    oi.on('connection', async(socket: any) => {
        console.log(socket.id);

        const messages: msg[] = await Chat.find({});
        socket.emit('load_old_messages', messages);


        socket.on('send_message', async (msg:msg) => {
            const newMsg = new Chat({
                msg: msg.msg,
                from: msg.from,
            });

            await newMsg.save();

            socket.broadcast.emit('receive_message', msg);
        });
    });
    
};