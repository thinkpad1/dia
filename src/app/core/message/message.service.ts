import {Injectable} from '@angular/core';
import {Connection, Channel, ConfirmChannel} from 'amqplib/callback_api';
import * as AMQP from 'amqplib/callback_api';
import {Logger} from '../logger.service';

const log = new Logger('MessageService');
const url = 'amqp://guest:guest@localhost:5672';
const queue = 'dia.queue';

@Injectable()
export class MessageService {
  constructor(private connection: Connection,
              private channel: Channel,
              private message: any) {
    this.initConnect();
  }

  initConnect() {
    AMQP.connect(url, (err, conn) => {
      this.connection = conn;
      if (err) {
        log.error('Connection to rabbitMQ Server failed, check your credentials');
      } else {
        console.log('connected with RabbitMQ localhost:5672');
        this.connection.createChannel((err2, ch) => {
          if (err2) {
            log.error('Maybe channel does not exist');
          } else {
            this.channel = ch;
            this.channel.assertQueue(queue, {durable: true});
          }
        });
      }
    });
  }

  consume() {
    this.channel.consume(queue, msg => {
      this.message = msg;
      console.log('[x] Received %s', msg.content.toString());
      const myJSON: any = JSON.parse(msg.content.toString());
      console.log('ID: ' + myJSON.id + '\n' +
        'PRICE: ' + myJSON.price + '\n' +
        'ITEM_NAME: ' + myJSON.itemName + '\n' +
        'ITEM_DESC: ' + myJSON.itemDescription + '\n' +
        'PICTURE: ' + myJSON.picture + '\n' +
        'OFFER: ' + myJSON.offer );
    });
  }
}
