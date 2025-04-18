"use client";

import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {useCurrentUser} from "./auth/hooks/use-current-user";
import {getProductsFromShop} from "./product-shop/product-shop.repository";
import ProductView from "./product-shop/product-shop.view";
import {getShoppingCartByUser} from "./shopping-cart/shopping-cart.repository";

export default function Page() {
  const {data: user, isLoading: userLoading} = useCurrentUser();
  const router = useRouter();

  const [products, setProducts] = useState<any[]>([]);
  const [cartId, setCartId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsFromShop().then((prods) => setProducts(prods));
  }, []);

  useEffect(() => {
    if (userLoading) return;

    if (!user) {
      router.push("/auth/login");
    } else {
      getShoppingCartByUser(user.id).then((cart) => {
        setCartId(cart.id);
        setLoading(false);
      });
    }
  }, [user, userLoading, router]);

  return <ProductView products={products} cartId={cartId!} />;
}
