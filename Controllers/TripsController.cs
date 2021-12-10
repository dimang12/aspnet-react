using Microsoft.AspNetCore.Mvc;
using TripAspNetReact.Data;

namespace TripAspNetReact.Controllers
{
    [Route("api/[controller]")]
    public class TripsController : Controller
    {
        private ITripService _service;

        public TripsController(ITripService service)
        {
            this._service = service;

        }
        // In other way, because the url name is the same 
        // the aciton name so we also can do this way
        // [HttpGet("[action]")] 
        [HttpGet("GetTrips")]
        public IActionResult GetTrips()
        {
            var allTrips = _service.getAllTrips();
            return Ok(allTrips);
        }


        [HttpGet("SingleTrip/{tripId}")]
        public IActionResult SingleTrip(int tripId)
        {

            var trip = this._service.getTripById(tripId);
            return Ok(trip);

        }

        [HttpPost("AddTrip")]
        public IActionResult AddTrip([FromBody] Trip trip)
        {
            if (trip != null)
            {
                _service.addNewTrip(trip);
            }
            return Ok();
        }

        [HttpPut("UpdateTrip/{tripId}")]
        public IActionResult UpdateTrip(int tripId, [FromBody] Trip newTrip)
        {
            this._service.updateTrip(tripId, newTrip);
            return Ok(newTrip);
        }

        [HttpDelete("DeleteTrip/{tripId}")]
        public IActionResult DeleteTrip(int tripId)
        {
            this._service.deleteTrip(tripId);
            return Ok();
        }
    }
}