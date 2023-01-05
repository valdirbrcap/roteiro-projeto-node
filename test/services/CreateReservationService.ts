import { CreateReservationService } from '../../src/services/CreateReservationService'
import { expect } from 'chai'
import { parseISO } from 'date-fns';
import Reservation from '../../src/models/Reservation';
import ReservationsRepository from '../../src/repositories/ReservationsRepository';

describe('CreateReservationService', () => {
    it('should create a reservation', () => {
        const reservationsRepository = new ReservationsRepository();
        let createReservation = new CreateReservationService(reservationsRepository)

        const parsedDate = parseISO("2023-01-04T22:00:00.000Z");

        const provider = "Marcel Proust";

        let reservation:Reservation = createReservation.execute({
            date: parsedDate,
            provider,
        });

        expect(reservation.id).to.not.be.null
    })
})