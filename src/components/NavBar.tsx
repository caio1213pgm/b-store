import { Button } from "@/components/ui/button";
import { ShoppingCart, User } from "lucide-react";

export default function NavBar() {
    return (
        <nav>
            <ul className="flex gap-2 ">
                <li>
                    <Button variant="ghost" size="icon">
                        <ShoppingCart className="size-5" />
                    </Button>
                </li>
                <li>
                    <Button variant="ghost" size="icon">
                        <User className="size-5" />
                    </Button>
                </li>
            </ul>
        </nav>
    );
}
