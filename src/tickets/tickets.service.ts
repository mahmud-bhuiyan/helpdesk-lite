import { Injectable, NotFoundException } from '@nestjs/common';
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
      createdAt: '2026-09-16T10:00:00.000Z',
    },
    {
      id: 2,
      subject: 'Payment Failed',
      description: 'User reports that their payment attempt failed.',
      priority: 'high',
      status: 'open',
      createdAt: '2026-09-16T11:30:00.000Z',
    },
    {
      id: 3,
      subject: 'Invoice Download Issue',
      description: 'User is unable to download their invoice.',
      priority: 'low',
      status: 'closed',
      createdAt: '2026-09-16T14:10:00.000Z',
    },
  ];

  findAll(status?: Ticket['status'], priority?: Ticket['priority']) {
    let tickets = this.tickets;

    if (status) {
      tickets = tickets.filter((ticket) => ticket.status === status);
    }

    if (priority) {
      tickets = tickets.filter((ticket) => ticket.priority === priority);
    }
    return tickets;
  }

  findOne(id: number) {
    const ticket = this.tickets.find((ticket) => ticket.id === id);

    if (!ticket) {
      throw new NotFoundException('Ticket with id ${id} not found');
    }

    return ticket;
  }
}
