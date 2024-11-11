export interface ApiResponse<T = any> {
    data: T
    status: number
    statusText: string
    headers: Record<string, string>
    config: any
  }
  