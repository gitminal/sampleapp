

jest.mock('react-native-push-notification', () => {
    return {
      addEventListener: jest.fn(),
      requestPermissions: jest.fn(() => Promise.resolve()),
      getInitialNotification: jest.fn(() => Promise.resolve()),
    }
   
  });
  
  it('calls console.log with "hello"', () => {
  const consoleSpy = jest.spyOn(console, 'log');

  console.log('Notification from background state');

  expect(consoleSpy).toHaveBeenCalledWith('Notification from background state');
});
it('calls console.log with "hello"', () => {
    const consoleSpy = jest.spyOn(console, 'log');
  
    console.log('console');
  
    expect(consoleSpy).toHaveBeenCalledWith('console');
  });