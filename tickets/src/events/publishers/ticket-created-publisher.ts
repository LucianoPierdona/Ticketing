import { Publisher, Subjects, TicketCreatedEvent } from '@lpjtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
