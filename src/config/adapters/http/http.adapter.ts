
//la clase es abstracta porque no se busca crear instancias del HttpAdapter
export abstract class HttpAdapter{
    abstract get<T>(url: string, options?: Record<string, unknown>): Promise<T>; 
}