import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import SEOMetadata from "../../components/seo/SEOMetadata";
import { getMetadata } from "../../utils/utils";
import Card from "../../components/common/Card";

export const Route = createLazyFileRoute("/products/")({
  component: About,
});

const products = [
  {
    id: "wh001",
    title: "Wireless Headphones",
    subTitle: "Noise Cancelling",
    description:
      "Enjoy immersive sound with active noise cancellation and up to 30 hours of battery life.",
    cardImage: {
      src: "https://picsum.photos/1280/720",
      alt: "Wireless Headphones",
    },
  },
  {
    id: "sp002",
    title: "Smartphone 13 Pro",
    subTitle: "5G Ready",
    description:
      "Experience blazing fast performance and stunning photography with the new 13 Pro.",
    cardImage: {
      src: "https://picsum.photos/1280/720",
      alt: "Smartphone 13 Pro",
    },
  },
  {
    id: "gl003",
    title: "Gaming Laptop",
    subTitle: "RTX 3070",
    description:
      "A powerful gaming laptop with high refresh rate and cutting-edge GPU performance.",
    cardImage: {
      src: "https://picsum.photos/1280/720",
      alt: "Gaming Laptop",
    },
  },
  {
    id: "ft004",
    title: "Fitness Tracker",
    subTitle: "Water Resistant",
    description:
      "Track your workouts, heart rate, and sleep with this lightweight fitness tracker.",
    cardImage: {
      src: "https://picsum.photos/1280/720",
      alt: "Fitness Tracker",
    },
  },
  {
    id: "tv005",
    title: "4K Smart TV",
    subTitle: "55-inch Display",
    description:
      "Watch your favorite shows and movies with vibrant 4K resolution and smart features.",
    cardImage: {
      src: "https://picsum.photos/1280/720",
      alt: "4K Smart TV",
    },
  },
  {
    id: "tb006",
    title: "Tablet Pro",
    subTitle: "12.9-inch Display",
    description:
      "Perfect for creative professionals with Apple Pencil support and stunning Liquid Retina display.",
    cardImage: {
      src: "https://picsum.photos/1280/720",
      alt: "Tablet Pro",
    },
  },
  {
    id: "kb007",
    title: "Mechanical Keyboard",
    subTitle: "RGB Backlit",
    description:
      "Premium mechanical switches with customizable RGB lighting for the ultimate typing experience.",
    cardImage: {
      src: "https://picsum.photos/1280/720",
      alt: "Mechanical Keyboard",
    },
  },
  {
    id: "sc008",
    title: "Smart Coffee Maker",
    subTitle: "WiFi Enabled",
    description:
      "Control your coffee maker from your phone and wake up to freshly brewed coffee.",
    cardImage: {
      src: "https://picsum.photos/1280/720",
      alt: "Smart Coffee Maker",
    },
  },
  {
    id: "rc009",
    title: "Robot Vacuum",
    subTitle: "Smart Navigation",
    description:
      "AI-powered cleaning with mapping technology and automatic dust bin emptying.",
    cardImage: {
      src: "https://picsum.photos/1280/720",
      alt: "Robot Vacuum",
    },
  },
  {
    id: "sw010",
    title: "Smart Watch",
    subTitle: "Health Monitor",
    description:
      "Track your fitness goals and stay connected with this feature-packed smartwatch.",
    cardImage: {
      src: "https://picsum.photos/1280/720",
      alt: "Smart Watch",
    },
  },
  {
    id: "sp011",
    title: "Smart Plug",
    subTitle: "Energy Monitoring",
    description:
      "Control your appliances remotely and track energy usage with this smart plug.",
    cardImage: {
      src: "https://picsum.photos/1280/720",
      alt: "Smart Plug",
    },
  },
  {
    id: "mc012",
    title: "Mirrorless Camera",
    subTitle: "4K Video",
    description:
      "Capture stunning photos and videos with this professional-grade mirrorless camera.",
    cardImage: {
      src: "https://picsum.photos/1280/720",
      alt: "Mirrorless Camera",
    },
  },
  {
    id: "ps013",
    title: "Portable Speaker",
    subTitle: "Waterproof",
    description:
      "Take your music anywhere with this rugged, waterproof portable speaker.",
    cardImage: {
      src: "https://picsum.photos/1280/720",
      alt: "Portable Speaker",
    },
  },
  {
    id: "gb014",
    title: "Gaming Bundle",
    subTitle: "Console + Games",
    description:
      "Get started gaming with this complete bundle including console and popular games.",
    cardImage: {
      src: "https://picsum.photos/1280/720",
      alt: "Gaming Bundle",
    },
  },
  {
    id: "dm015",
    title: "Desktop Monitor",
    subTitle: "32-inch 4K",
    description:
      "Enhance your workspace with this large, high-resolution professional monitor.",
    cardImage: {
      src: "https://picsum.photos/1280/720",
      alt: "Desktop Monitor",
    },
  },
];

function About() {
  const navigate = useNavigate({ from: "/products" });
  return (
    <>
      <SEOMetadata {...getMetadata("products")} />
      <div className="p-2">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 justify-center">
          {products.map((product) => (
            <Card
              key={product.id}
              {...product}
              onClick={() => navigate({ to: `${product.id}` })}
            />
          ))}
        </div>
      </div>
    </>
  );
}
