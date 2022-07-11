import api from "../../pages/api/main";
import React, { useEffect, useState } from "react";
import { Container, Center, Input, InputGroup, Button, InputRightElement, Box, Image, Grid, GridItem, Stack, Text, Icon, Link, Flex, SimpleGrid } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { SearchIcon, LinkIcon, StarIcon } from '@chakra-ui/icons'

const HomePage = () => {
    const [user, setUser] = useState('');
    const [data, setData] = useState([])
    const [dataRepos, setDataRepos] = useState([])

    const handleSearch = () => {
        try {
            api.get(`/users/${user}`)
                .then(response => setData(response.data))
                .catch(err => console.log(err))
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        try {
            api.get(`/users/${user}/repos`)
                .then(response => setDataRepos(response.data))
                .catch(err => console.log(err))
        } catch (err) {
            console.log(err)
        }
    }, [data])

    return (
        <Container minH={'80vh'} maxW='1400px' color='#c9d1d9'>
            <Center marginTop={50}>
                <Box marginBottom={'3rem'}>
                    <Image src='/GitHub_Logo.png' w={300} marginLeft={'auto'} marginRight={'auto'} marginBottom={'1rem'} alt='GitHub' />
                    <InputGroup w={{ base: 'sm', md: 'md' }}>
                        <Input
                            pr='4.5rem'
                            type={'text'}
                            placeholder='Search for github user'
                            onChange={(e) => setUser(e.target.value)}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='md' onClick={handleSearch}>
                                <SearchIcon color={'black'} />
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Box>
            </Center>
            <Center>
                <Box>
                    {data.id ? (
                        <Tabs align='center'>
                            <TabList marginBottom={'3rem'} borderBottom={'none'}>
                                <Tab>
                                    <Icon viewBox="0 0 16 16" marginRight={2} fill={'#8b949e'}>
                                        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                                    </Icon>
                                    Overview
                                </Tab>
                                <Tab>
                                    <Icon viewBox="0 0 16 16" marginRight={2} fill={'#8b949e'}>
                                        <path fillRule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z" />
                                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                                    </Icon>
                                    Repositories
                                </Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <SimpleGrid columns={{ base: '1', md: '2' }} spacing={5} placeItems={'baseline'} textAlign={'left'}>
                                        <Box w='100%'>
                                            <Image src={data.avatar_url} w={300} marginLeft={'auto'} marginRight={'auto'} borderRadius={'50%'} border={'5px solid #58a6ff'} />
                                        </Box>
                                        <Box w='100%'>
                                            <Stack spacing={3}>
                                                <Link href={data.html_url} isExternal>
                                                    <Text fontSize='3xl' color={'#58a6ff'}><b>{data.name}</b></Text>
                                                    <Text fontSize='1xl'>{data.login}</Text>
                                                </Link>
                                                <Text fontSize='2xl'>{data.bio}</Text>
                                                <Text fontSize='1xl'>
                                                    <Icon viewBox="0 0 16 16" marginRight={2} fill={'#8b949e'}>
                                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                                    </Icon> {data.location}
                                                </Text>
                                                <Text fontSize='1xl'>
                                                    <Icon viewBox="0 0 16 16" marginRight={2} fill={'#8b949e'}>
                                                        <path fillRule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z" />
                                                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                                                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                                                    </Icon>
                                                    {data.public_repos}
                                                </Text>
                                                <Text fontSize='1xl'>
                                                    <Icon viewBox="0 0 16 16" marginRight={2} fill={'#8b949e'}>
                                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                    </Icon>
                                                    {data.following} Following <b>·</b> {data.followers} Followers
                                                </Text>
                                                <Text fontSize='1xl'>{data.blog ? <Link href={data.blog} isExternal>
                                                    <LinkIcon marginRight={2} /> {data.blog}</Link> : null}
                                                </Text>
                                            </Stack>
                                        </Box>
                                    </SimpleGrid>
                                </TabPanel>
                                <TabPanel p={'none'}>
                                    <Box>
                                        <Text textAlign={'left'} m={3}>{dataRepos.length} Results</Text>
                                        {dataRepos.map(item =>
                                            <>
                                                <Grid align='start'>
                                                    <GridItem>
                                                        <Box p={3} border={'1px solid #58a6ff'} m={2} borderRadius={10}>
                                                            <Link href={item.svn_url} isExternal><Text fontSize='2xl' wordBreak={"break-word"} color={'#58a6ff'}>{item.name}</Text></Link>
                                                            <Text fontSize='1xl'>{item.description ? item.description : 'No description available'}</Text>
                                                            <Stack direction='row' marginTop={2}>
                                                                <Text fontSize='1xl'>{item.language}</Text>
                                                                <Text fontSize='1xl'><Flex alignItems={'baseline'} gap={1}><StarIcon />{item.stargazers_count}</Flex></Text>
                                                                <Text fontSize='1xl'>Forks: {item.forks}</Text>
                                                                <Text fontSize='1xl'>Updated {item.updated_at.split('T')[0].replaceAll('-', '/')}</Text>
                                                            </Stack>
                                                        </Box>
                                                    </GridItem>
                                                </Grid>
                                            </>
                                        )}
                                    </Box>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    ) : (
                        <Box>
                            <Text fontSize='3xl' color='#58a6ff' textAlign={'center'}>Search profiles on github</Text>
                            <Image src={'/search.png'} w={300} marginTop={'5rem'} marginLeft={'auto'} marginRight={'auto'} />
                        </Box>
                    )}
                </Box>
            </Center>
        </Container>
    )
}

export default HomePage;