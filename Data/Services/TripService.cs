using System.Collections.Generic;
using System.Linq;

namespace TripAspNetReact.Data
{
    public class TripService : ITripService
    {
        public void addNewTrip(Trip trip)
        {
            TripData.Trips.Add(trip);

        }


        public List<Trip> getAllTrips()
        {
            return TripData.Trips.ToList();
        }

        public Trip getTripById(int tripId)
        {
            return TripData.Trips.FirstOrDefault(n => n.Id == tripId);
        }

        public void updateTrip(int tripId, Trip newTrip)
        {
            var oldTrip = TripData.Trips.FirstOrDefault(n => n.Id == tripId);
            if (oldTrip != null)
            {
                oldTrip.Name = newTrip.Name;
                oldTrip.Description = newTrip.Description;
                oldTrip.DateStarted = newTrip.DateStarted;
                oldTrip.DateCompleted = newTrip.DateCompleted;

            }
        }

        public void deleteTrip(int tripId)
        {
            var trip = TripData.Trips.FirstOrDefault(n => n.Id == tripId);
            if (trip != null)
            {
                TripData.Trips.Remove(trip);
            }
        }
    }
}