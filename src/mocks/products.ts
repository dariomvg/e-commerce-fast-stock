const url_image =
  "https://res.cloudinary.com/duyiov4s1/image/upload/v1740510864/ecommerce";

export const data = {
  categories: [
    { id: 1, category: "Electronics" },
    { id: 2, category: "Computers" },
    { id: 3, category: "Audio" },
    { id: 4, category: "Wearables" },
    { id: 5, category: "Photography" },
    { id: 6, category: "Accessories" },
    { id: 7, category: "Clothes" },
    { id: 8, category: "Fashion" },
    { id: 9, category: "Sports" },
  ],
  products: [
    {
      id: 1,
      title: "Smartphone",
      stock: 50,
      price: 699.99,
      details: "Latest model with advanced features",
      picture: `${url_image}/smartphone.webp`,
      category: "Electronics",
    },
    {
      id: 2,
      title: "Laptop",
      stock: 30,
      price: 999.99,
      details: "High performance laptop for professionals",
      picture: `${url_image}/laptop.webp`,
      category: "Computers",
    },
    {
      id: 3,
      title: "Headphones",
      stock: 100,
      price: 199.99,
      details: "Noise-cancelling over-ear headphones",
      picture: `${url_image}/headphones.webp`,
      category: "Audio",
    },
    {
      id: 4,
      title: "Smartwatch",
      stock: 75,
      price: 249.99,
      details: "Water-resistant smartwatch with fitness tracking",
      picture: `${url_image}/smartwatch.webp`,
      category: "Wearables",
    },
    {
      id: 5,
      title: "Camera",
      stock: 20,
      price: 499.99,
      details: "Digital camera with 4K video recording",
      picture: `${url_image}/camera.webp`,
      category: "Photography",
    },
    {
      id: 6,
      title: "CPU Gamer",
      stock: 13,
      price: 1999.99,
      details: "High performance CPU for gamers and content creators",
      picture: `${url_image}/cpugamer.webp`,
      category: "Computers",
    },
    {
      id: 7,
      title: "Tablet",
      stock: 40,
      price: 399.99,
      details: "Lightweight tablet with high-resolution display",
      picture: `${url_image}/tablet.webp`,
      category: "Computers",
    },
    {
      id: 8,
      title: "Gaming Mouse",
      stock: 60,
      price: 79.99,
      details: "Ergonomic gaming mouse with RGB lighting",
      picture: `${url_image}/mouse.webp`,
      category: "Accessories",
    },
    {
      id: 9,
      title: "Mechanical Keyboard",
      stock: 50,
      price: 129.99,
      details: "Mechanical keyboard with customizable keys",
      picture: `${url_image}/keyboard.webp`,
      category: "Accessories",
    },
    {
      id: 10,
      title: "Wireless Earbuds",
      stock: 120,
      price: 149.99,
      details: "True wireless earbuds with noise cancellation",
      picture: `${url_image}/wirelessEarbuds.webp`,
      category: "Audio",
    },
    {
      id: 11,
      title: "Smart TV",
      stock: 25,
      price: 799.99,
      details: "4K Ultra HD Smart TV with streaming apps",
      picture: `${url_image}/smartTv.webp`,
      category: "Electronics",
    },
    {
      id: 12,
      title: "Bluetooth Speaker",
      stock: 80,
      price: 99.99,
      details: "Portable Bluetooth speaker with deep bass",
      picture: `${url_image}/speaker.webp`,
      category: "Audio",
    },
    {
      id: 13,
      title: "VR Headset",
      stock: 30,
      price: 349.99,
      details: "Immersive virtual reality headset with controllers",
      picture: `${url_image}/vrHeadset.webp`,
      category: "Gaming",
    },
    {
      id: 14,
      title: "External Hard Drive",
      stock: 55,
      price: 129.99,
      details: "2TB external hard drive for backup storage",
      picture: `${url_image}/externalDrive.webp`,
      category: "Computers",
    },
    {
      id: 15,
      title: "Drone",
      stock: 15,
      price: 899.99,
      details: "Professional drone with 4K camera and GPS",
      picture: `${url_image}/drone.webp`,
      category: "Photography",
    },
    {
      id: 16,
      title: "Graphics Card",
      stock: 22,
      price: 599.99,
      details: "High-end graphics card for gaming and rendering",
      picture: `${url_image}/graphicsCard.webp`,
      category: "Computers",
    },
    {
      id: 17,
      title: "Gaming Chair",
      stock: 35,
      price: 249.99,
      details: "Ergonomic gaming chair with lumbar support",
      picture: `${url_image}/gamingChair.webp`,
      category: "Furniture",
    },
    {
      id: 18,
      title: "Smart Light Bulb",
      stock: 90,
      price: 39.99,
      details: "Wi-Fi enabled smart bulb with voice control",
      picture: `${url_image}/smartLight.webp`,
      category: "Home Automation",
    },
    {
      id: 19,
      title: "Portable Monitor",
      stock: 20,
      price: 299.99,
      details: "15.6-inch portable monitor with USB-C",
      picture: `${url_image}/monitor.webp`,
      category: "Computers",
    },
    {
      id: 20,
      title: "E-Reader",
      stock: 40,
      price: 179.99,
      details: "E-Ink reader with adjustable lighting",
      picture: `${url_image}/eReader.webp`,
      category: "Electronics",
    },
    {
      id: 21,
      title: "Robot Vacuum",
      stock: 25,
      price: 399.99,
      details: "Smart robot vacuum with app control",
      picture: `${url_image}/robot.webp`,
      category: "Home Automation",
    },
    {
      id: 22,
      title: "Gaming Console",
      stock: 30,
      price: 499.99,
      details: "Next-gen gaming console with 4K support",
      picture: `${url_image}/console.webp`,
      category: "Gaming",
    },
    {
      id: 23,
      title: "Smart Doorbell",
      stock: 45,
      price: 199.99,
      details: "Video doorbell with motion detection and app control",
      picture: `${url_image}/smartDoorbell.webp`,
      category: "Home Automation",
    },
    {
      id: 24,
      title: "Wireless Charger",
      stock: 100,
      price: 49.99,
      details: "Fast wireless charging pad for smartphones",
      picture: `${url_image}/wirelessCharger.webp`,
      category: "Accessories",
    },
    {
      id: 25,
      title: "Anti-Theft Backpack",
      stock: 40,
      price: 49.99,
      details: "Backpack with hidden zipper and USB port for charging devices",
      picture: `${url_image}/backpack.webp`,
      category: "Accessories",
    },
    {
      id: 26,
      title: "Sports Sneakers",
      stock: 35,
      price: 79.99,
      details: "Lightweight and breathable running shoes",
      picture: `${url_image}/sneakers.webp`,
      category: "Clothes",
    },
    {
      id: 27,
      title: "Snapback Cap",
      stock: 60,
      price: 29.99,
      details: "Adjustable cap with modern design and 3D embroidery",
      picture: `${url_image}/cap.webp`,
      category: "Clothes",
    },
    {
      id: 28,
      title: "Waterproof Jacket",
      stock: 25,
      price: 99.99,
      details: "Water-resistant jacket, ideal for rainy days",
      picture: `${url_image}/waterproof.webp`,
      category: "Clothes",
    },
    {
      id: 29,
      title: "Classic Analog Watch",
      stock: 20,
      price: 119.99,
      details: "Elegant wristwatch with a leather strap",
      picture: `${url_image}/analogWatch.webp`,
      category: "Accessories",
    },
    {
      id: 30,
      title: "Leather Bag",
      stock: 15,
      price: 149.99,
      details: "Genuine leather bag with multiple compartments",
      picture: `${url_image}/bag.webp`,
      category: "Fashion",
    },
    {
      id: 31,
      title: "Polarized Sunglasses",
      stock: 50,
      price: 59.99,
      details: "Sunglasses with UV protection and polarized lenses",
      picture: `${url_image}/sunglasses.webp`,
      category: "Accessories",
    },
    {
      id: 32,
      title: "Scarf and Gloves Set",
      stock: 45,
      price: 39.99,
      details: "Wool scarf and thermal gloves for winter",
      picture: `${url_image}/scarfGloves.webp`,
      category: "Clothes",
    },
    {
      id: 33,
      title: "Hoodie Sweatshirt",
      stock: 55,
      price: 54.99,
      details: "Unisex cotton sweatshirt with kangaroo pocket",
      picture: `${url_image}/hoodie.webp`,
      category: "Clothes",
    },
    {
      id: 34,
      title: "Sports Pants",
      stock: 40,
      price: 49.99,
      details: "Lightweight and stretchy pants, ideal for workouts",
      picture: `${url_image}/pants.webp`,
      category: "Clothes",
    },
    {
      id: 35,
      title: "Travel Luggage Set",
      stock: 20,
      price: 199.99,
      details: "Set of three hard-shell suitcases with 360° wheels",
      picture: `${url_image}/travelSet.webp`,
      category: "Accessories",
    },
    {
      id: 36,
      title: "Beach Sandals",
      stock: 50,
      price: 24.99,
      details: "Comfortable and water-resistant sandals",
      picture: `${url_image}/sandals.webp`,
      category: "Clothes",
    },
    {
      id: 37,
      title: "Leather Belt",
      stock: 40,
      price: 34.99,
      details: "Genuine leather belt with metal buckle",
      picture: `${url_image}/belt.webp`,
      category: "Fashion",
    },
    {
      id: 38,
      title: "Cycling Gloves",
      stock: 30,
      price: 19.99,
      details: "Padded gloves with non-slip grip",
      picture: `${url_image}/cyclingGloves.webp`,
      category: "Sports",
    },
    {
      id: 39,
      title: "Formal Shirt",
      stock: 25,
      price: 64.99,
      details: "High-quality cotton shirt for office wear",
      picture: `${url_image}/shirt.webp`,
      category: "Fashion",
    },
    {
      id: 40,
      title: "Men's Swimwear",
      stock: 35,
      price: 29.99,
      details: "Lightweight and quick-drying swim trunks",
      picture: `${url_image}/swimwear.webp`,
      category: "Clothes",
    },
    {
      id: 41,
      title: "Laptop Backpack",
      stock: 30,
      price: 59.99,
      details: "Padded backpack with a compartment for 15'' laptops",
      picture: `${url_image}/laptopBackpack.webp`,
      category: "Accessories",
    },
    {
      id: 42,
      title: "Casual Dress",
      stock: 20,
      price: 79.99,
      details: "Lightweight and comfortable dress for daily wear",
      picture: `${url_image}/dress.webp`,
      category: "Fashion",
    },
    {
      id: 43,
      title: "Leather Jacket",
      stock: 15,
      price: 129.99,
      details: "Synthetic leather jacket with thermal lining",
      picture: `${url_image}/jacket.webp`,
      category: "Fashion",
    },
    {
      id: 44,
      title: "School Backpack",
      stock: 50,
      price: 39.99,
      details: "Ergonomic backpack with multiple compartments",
      picture: `${url_image}/schoolBackpack.webp`,
      category: "Accessories",
    },
    {
      id: 45,
      title: "Winter Boots",
      stock: 30,
      price: 89.99,
      details: "Thermal waterproof boots with anti-slip sole",
      picture: `${url_image}/boots.webp`,
      category: "Clothes",
    },
    {
      id: 46,
      title: "Tote Bag",
      stock: 25,
      price: 49.99,
      details: "Spacious bag made of durable fabric, ideal for daily use",
      picture: `${url_image}/toteBag.webp`,
      category: "Fashion",
    },
    {
      id: 47,
      title: "Sports Watch",
      stock: 40,
      price: 69.99,
      details: "Digital watch with stopwatch and water resistance",
      picture: `${url_image}/sportsWatch.webp`,
      category: "Accessories",
    },
    {
      id: 48,
      title: "Reading Glasses",
      stock: 45,
      price: 19.99,
      details: "Lightweight glasses with magnification for reading",
      picture: `${url_image}/glasses.webp`,
      category: "Accessories",
    },
    {
      id: 49,
      title: "Cotton T-Shirt",
      stock: 60,
      price: 24.99,
      details: "Basic 100% cotton T-shirt with classic fit",
      picture: `${url_image}/tshirt.webp`,
      category: "Clothes",
    },
    {
      id: 50,
      title: "Winter Pajamas",
      stock: 30,
      price: 59.99,
      details: "Warm flannel pajamas for cold nights",
      picture: `${url_image}/pijama.webp`,
      category: "Clothes",
    },
  ],
};
