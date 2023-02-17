using Microsoft.AspNetCore.Mvc;
using RestaurantReact.Model;

namespace Restaurant.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController : ControllerBase
    {


        [HttpGet]
        public IEnumerable<PriceAble> GetCurenntPrice()
        {

            return Demonstation.demonstations;
        }

        [HttpPost]
        public async Task<int> GetPayment([FromBody] IEnumerable<PriceAble> list)
        {

            return list.Sum(p => p.Price);
        }
    }
}