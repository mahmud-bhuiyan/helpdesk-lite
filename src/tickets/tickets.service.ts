import { Injectable } from '@nestjs/common';
import { Ticket } from './ticket.interface.js';

@Injectable()
export class TicketsService {
  private readonly tickets: Ticket[] = [
    {
      id: 1,
      subject: 'Cannot login to account',
      description:
        'User is unable to login to their account using the correct credentials.',
      priority: 'high',
      status: 'open',
      createdAt: new Date(),
    },
    {
      id: 2,
      subject: 'Payment Failed',
      description: 'User reports that their payment attempt failed.',
      priority: 'high',
      status: 'open',
      createdAt: new Date(),
    },
    {
      id: 3,
      subject: 'Invoice Download Issue',
      description: 'User is unable to download their invoice.',
      priority: 'low',
      status: 'closed',
      createdAt: new Date(),
    },
  ];

  findAll() {
    return this.tickets;
  }
}
