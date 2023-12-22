
import YodlrApi from "../src/Api";

describe('YodlrApi', () => {
  beforeEach(() => {
    // Mock the global fetch function
    // console.log(global)
    global.fetch = vi.fn();
  });

  afterEach(() => {

    vi.resetAllMocks();

  });

  it('should fetch users successfully', async () => {
    // Mock the fetch response
    const mockResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue([{ id: 1, name: 'User1' }, { id: 2, name: 'User2' }])
    };

    global.fetch.mockResolvedValue(mockResponse);

    // Call the getUsers method
    const users = await YodlrApi.getUsers();

    // Verify the fetch call
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3001/api/users');

    // Verify the returned users
    expect(users).toEqual([{ id: 1, name: 'User1' }, { id: 2, name: 'User2' }]);
  });

  it('should handle API error', async () => {
    // Mock the fetch response for an error
    const mockResponse = {
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
    };

    global.fetch.mockResolvedValue(mockResponse);

    // Spy on console.error
    vi.spyOn(console, 'error').mockImplementation(() => {});

    // Call the getUsers method
    const users = await YodlrApi.getUsers();

    // Verify the fetch call
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3001/api/users');

    // Verify the console.error call
    expect(console.error).toHaveBeenCalledWith('API Error:', 500, 'Internal Server Error');

    // // Verify the returned value is undefined in case of an error
    expect(users).toBeUndefined();
  });
});