import { HttpHeaders, Client } from ".";
import { ApplicationContainer } from "@tearex/internal";


export type RouteFunction<L extends {}> =
(
    ((model: L, headers: HttpHeaders, client: Client) => void) |
    ((model: L, client: Client, headers: HttpHeaders) => void) |
    ((headers: HttpHeaders, model: L, client: Client) => void) |
    ((client: Client, model: L, headers: HttpHeaders) => void) |
    ((client: Client, headers: HttpHeaders, model: L) => void) |
    ((headers: HttpHeaders, client: Client, model: L) => void) |
    ((model: L, client: Client) => void) |
    ((client: Client, model: L) => void) |
    ((headers: HttpHeaders, client: Client) => void) |
    ((client: Client, headers: HttpHeaders) => void) |
    ((model: L, headers: HttpHeaders) => void) |
    ((headers: HttpHeaders, model: L) => void) |
    ((model: L) => void) |
    ((headers: HttpHeaders) => void) |
    ((client: Client) => void)
);

export function Controller<T extends { new (...args: any[]): {} }>(constructor: T): void {
    ApplicationContainer.getLinkInstance().registerController(constructor);
}
