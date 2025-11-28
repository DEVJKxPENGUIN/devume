import * as grpc from '@grpc/grpc-js';
// Assuming your generated files are located similarly. Adjust paths if necessary.
// import { UserServiceClient } from '../../generated/user_grpc_pb'; 
// import { UserRequest, UserResponse } from '../../generated/user_pb';

// This is a placeholder client. Replace with your actual generated client.
// We create a dummy class to avoid compilation errors until the real one is available.
class DummyUserServiceClient extends grpc.Client {
    constructor(address: string, credentials: grpc.ChannelCredentials) {
        super(address, credentials);
    }
    // Add dummy methods that match your service definition
    getUser(request: any, callback: (error: any, response: any) => void) {
        // This is a dummy implementation.
        console.log('Dummy getUser called with:', request);
        callback(null, { getName: () => `Dummy User: ${request.getId()}` });
    }
}

// --- Singleton gRPC Client ---
let clientInstance: DummyUserServiceClient | null = null;

/**
 * Returns a singleton instance of the UserServiceClient.
 * This function should only be called on the server-side.
 */
export function getUserServiceClient(): DummyUserServiceClient {
  if (!clientInstance) {
    const grpcApiUrl = process.env.NEXT_PUBLIC_GRPC_API_URL;
    if (!grpcApiUrl) {
      throw new Error('gRPC API URL is not defined in environment variables.');
    }
    
    console.log(`Initializing gRPC client for URL: ${grpcApiUrl}`);
    
    // In a real scenario, you would use your generated client:
    // clientInstance = new UserServiceClient(grpcApiUrl, grpc.credentials.createInsecure());
    
    // Using the dummy client for now:
    clientInstance = new DummyUserServiceClient(grpcApiUrl, grpc.credentials.createInsecure());
  }
  return clientInstance;
}

/**
 * A generic wrapper to convert callback-based gRPC calls into Promises.
 * @param client The gRPC client instance.
 * @param methodName The name of the method to call (e.g., 'getUser').
 * @param request The request object for the gRPC call.
 * @returns A Promise that resolves with the response.
 */
export function grpcRequest<TRequest, TResponse>(
    client: grpc.Client,
    methodName: string,
    request: TRequest
): Promise<TResponse> {
    return new Promise((resolve, reject) => {
        (client as any)[methodName](request, (error: grpc.ServiceError | null, response: TResponse) => {
            if (error) {
                console.error(`gRPC Error (${methodName}):`, error);
                return reject(error);
            }
            resolve(response);
        });
    });
}

// --- Example of how to use it in a Server Component or Route Handler ---
/*
import { getUserServiceClient, grpcRequest } from '@/utils/grpcHandler';
import { UserRequest, UserResponse } from '../../generated/user_pb';

async function fetchUser(userId: string) {
    try {
        const client = getUserServiceClient();
        const request = new UserRequest();
        request.setId(userId);

        // Use the promise wrapper
        const response = await grpcRequest<UserRequest, UserResponse>(client, 'getUser', request);
        
        // Assuming the response has a `toObject()` method from protobuf
        return response.toObject(); 
    } catch (error) {
        console.error('Failed to fetch user:', error);
        return null;
    }
}
*/
