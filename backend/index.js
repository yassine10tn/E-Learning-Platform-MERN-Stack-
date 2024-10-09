const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(express.json());

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("users", userSchema);

app.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  newUser
    .save()
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to register user" });
    });
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        res.status(200).json({ success: true, message: "Login successful" });
      } else {
        res
          .status(401)
          .json({ success: false, message: "Invalid credentials" });
      }
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred during login" });
  }
});

const messageSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model("messages", messageSchema);

app.post("/api/messages", (req, res) => {
  const { email, content } = req.body;

  const newMessage = new Message({
    email,
    content,
  });

  newMessage
    .save()
    .then((message) => {
      res.status(201).json(message);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to save message" });
    });
});

const orderSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  deliveryOption: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: String,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model("orders", orderSchema);

app.post("/api/orders", (req, res) => {
  const {
    fullName,
    email,
    phoneNumber,
    streetAddress,
    city,
    zipCode,
    deliveryOption,
    cardNumber,
    expiryDate,
    cvv,
  } = req.body;

  const newOrder = new Order({
    fullName,
    email,
    phoneNumber,
    streetAddress,
    city,
    zipCode,
    deliveryOption,
    cardNumber,
    expiryDate,
    cvv,
  });

  newOrder
    .save()
    .then((order) => {
      res.status(201).json(order);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to save order" });
    });
});

const wishlistSchema = new mongoose.Schema({
  img: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: String, required: true },
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

app.post("/api/wishlist", async (req, res) => {
  const { img, desc, price } = req.body;

  const newWishlistItem = new Wishlist({ img, desc, price });

  try {
    const item = await newWishlistItem.save();
    res.status(201).json(item);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to save wishlist item" });
  }
});

app.get("/api/wishlist", async (req, res) => {
  try {
    const wishlistItems = await Wishlist.find();
    res.status(200).json(wishlistItems);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch wishlist items" });
  }
});

app.delete("/api/wishlist", async (req, res) => {
  try {
    await Wishlist.deleteMany({});
    res.status(200).json({ message: "All wishlist items deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete wishlist items" });
  }
});

app.delete("/api/wishlist/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Wishlist.findByIdAndDelete(id);
    res.status(200).json({ message: "Wishlist item deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete wishlist item" });
  }
});

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://yassinamri156:Yassinamri123456@helmokhekcluster.qiq4s.mongodb.net/OnlineCourses?retryWrites=true&w=majority&appName=HelMokhekCluster"
    );
    console.log("Connected to database");
  } catch (err) {
    console.log("Failed to connect database", err);
  }
}

connectDB();

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
