using System.Collections.Generic;
namespace TripAspNetReact.Data
{
    public interface ITripService
    {
        List<Trip> getAllTrips();

        Trip getTripById(int tripId);

        void addNewTrip(Trip trip);

        void updateTrip(int tripId, Trip newTrip);

        void deleteTrip(int tripId);


    }
}