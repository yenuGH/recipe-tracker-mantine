import { Title, Text, Anchor } from '@mantine/core'

export function Testing() {
    return (
        <>
            <Title order={1}>Hello, Mantine!</Title>
            <Text>
                This is a simple example of using Mantine components in a React application.
            </Text>
            <Anchor href="https://mantine.dev" target="_blank">Mantine Documentation</Anchor>
        </>
    );
}