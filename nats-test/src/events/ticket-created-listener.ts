import { Message } from 'node-nats-streaming';
import { Listener } from './base-listener';
import { Subjects } from '../../../common/events/subjects';
import { TicketCreatedEvent } from '../../../common/events/ticket-created-event';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = 'payments-service';
  onMessage(data: TicketCreatedEvent['data'], msg: Message) {
    console.log('Event data!', data);

    msg.ack();
  }
}
