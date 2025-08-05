export default defineEventHandler((event): HealthCheckResponse => {
  return new class implements HealthCheckResponse {
    status: string = 'ok';
  }
})

interface HealthCheckResponse {
  'status'?: (string);
}