import React from 'react';
import {
	Badge,
	Box,
	Flex,
	HStack,
	Spacer,
	Pressable,
	Text,
	Button,
	Icon,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const AccountItem = ({
	account,
	navigateTo,
	handleActivation,
	role,
}) => {
	const navigation = useNavigation();
	const { id, name, phone, email, active } = account;
	return (
		<Box shadow={1} bg='lightBlue.50' p='3' mb='3' mx='4' rounded='5'>
			<HStack alignItems='center'>
				<Badge
					colorScheme={active == true ? 'success' : 'danger'}
					_text={{
						textTransform: 'capitalize',
					}}
					variant='subtle'
					rounded='4'>
					{active ? 'Active' : 'Inactive'}
				</Badge>
				<Spacer />
				<HStack color='coolGray.800' alignItems='center'>
					<Icon as={Ionicons} name='call-outline' size='xs' mr='1' />
					<Text fontSize='xs'>{phone}</Text>
				</HStack>
			</HStack>
			<Text color='coolGray.800' mt='1' fontWeight='medium' fontSize='xl'>
				{name}
			</Text>
			<HStack color='coolGray.800' alignItems='center'>
				<Icon as={Ionicons} name='mail-outline' size='xs' mr='1' />
				<Text fontSize='xs'>{email ? email : 'N/A'}</Text>
			</HStack>
			<Flex direction='row' justify='space-between' align='center' mt='1'>
				<Pressable
					onPress={() => navigation.navigate(navigateTo, { account: account })}>
					{({ isHovered, isFocused, isPressed }) => {
						return (
							<>
								{isPressed ? (
									<Text
										mt='2'
										fontSize={12}
										fontWeight='medium'
										textDecorationLine='underline'
										color='darkBlue.600'
										alignSelf='flex-start'>
										View Details
									</Text>
								) : (
									<Text
										mt='2'
										fontSize={12}
										fontWeight='medium'
										color='darkBlue.600'>
										View Details
									</Text>
								)}
							</>
						);
					}}
				</Pressable>

				<Button
					onPress={() => handleActivation(id, active, role)}
					size='sm'
					py='1'
					px='2'
					colorScheme={active ? 'error' : 'info'}
					_text={{ textTransform: 'capitalize' }}
					leftIcon={<Icon as={Ionicons} name='power-outline' size='xs' />}>
					{active ? 'deactivate' : 'activate'}
				</Button>
			</Flex>
		</Box>
	);
};

export const ServiceItem = ({ service, navigateTo, role }) => {
	const navigation = useNavigation();
	const { id, servicereq_no, title, status, priority, created_at } = service;
	return (
		<Box shadow={1} bg='lightBlue.50' p='3' mb='3' mx='4' rounded='5'>
			<HStack alignItems='center'>
				<Badge
					colorScheme={'info'}
					_text={{
						textTransform: 'capitalize',
					}}
					variant='solid'
					rounded='4'>
					{servicereq_no}
				</Badge>
				<Spacer />
				<HStack color='coolGray.800' alignItems='center'>
					<Icon as={Ionicons} name='calendar-outline' size='xs' mr='1' />
					<Text fontSize='xs'>{created_at}</Text>
				</HStack>
			</HStack>
			<Text color='coolGray.800' mt='1' fontWeight='medium' fontSize='xl'>
				{title}
			</Text>
			<HStack color='warning.600' alignItems='center'>
				<Icon
					color='warning.600'
					as={Ionicons}
					name='list-circle-outline'
					size='sm'
					mr='1'
				/>
				<Text
					color='warning.600'
					fontSize='sm'
					style={{ textTransform: 'capitalize' }}>
					{status}
				</Text>
			</HStack>
			<Flex direction='row' justify='space-between' align='center' mt='1'>
				<Pressable
					onPress={() => navigation.navigate(navigateTo, { service: service })}>
					{({ isHovered, isFocused, isPressed }) => {
						return (
							<>
								{isPressed ? (
									<Text
										mt='2'
										fontSize={12}
										fontWeight='medium'
										textDecorationLine='underline'
										color='darkBlue.600'
										alignSelf='flex-start'>
										View Details
									</Text>
								) : (
									<Text
										mt='2'
										fontSize={12}
										fontWeight='medium'
										color='darkBlue.600'>
										View Details
									</Text>
								)}
							</>
						);
					}}
				</Pressable>

				<Badge
					size='sm'
					py='1'
					px='2'
					variant='subtle'
					colorScheme={
						priority == 'High'
							? 'error'
							: priority == 'Medium'
							? 'amber'
							: 'lime'
					}
					_text={{ textTransform: 'capitalize' }}
					leftIcon={<Icon as={Ionicons} name='filter-outline' size='xs' />}>
					{priority}
				</Badge>
			</Flex>
		</Box>
	);
};

export const InvoiceItem = ({ invoice, navigateTo, handlePaymentStatus }) => {
	const navigation = useNavigation();
	const { id, service, tech_charge, equip_charge, status, created_at } =
		invoice;
	return (
		<Box shadow={1} bg='lightBlue.50' p='3' mb='3' mx='4' rounded='5'>
			<HStack alignItems='center'>
				<Badge
					colorScheme={'info'}
					_text={{
						textTransform: 'capitalize',
					}}
					variant='outline'
					rounded='4'>
					{`Total charge - ৳${
						parseFloat(tech_charge) + parseFloat(equip_charge)
					}`}
				</Badge>
				<Spacer />
				<HStack color='coolGray.800' alignItems='center'>
					<Icon as={Ionicons} name='calendar-outline' size='xs' mr='1' />
					<Text fontSize='xs'>{created_at}</Text>
				</HStack>
			</HStack>
			<Text color='coolGray.800' mt='1' fontWeight='medium' fontSize={18}>
				{`Invoice - ${service?.title}`}
			</Text>
			<HStack color='warning.600' alignItems='center'>
				<Text
					color='warning.600'
					fontSize='sm'
					style={{ textTransform: 'capitalize' }}>
					{`created by - ${service?.technician?.phone}`}
				</Text>
			</HStack>
			<Flex direction='row' justify='space-between' align='center' mt='1'>
				<Pressable
					onPress={() => navigation.navigate(navigateTo, { invoice: invoice })}>
					{({ isHovered, isFocused, isPressed }) => {
						return (
							<>
								{isPressed ? (
									<Text
										mt='2'
										fontSize={12}
										fontWeight='medium'
										textDecorationLine='underline'
										color='darkBlue.600'
										alignSelf='flex-start'>
										View Details
									</Text>
								) : (
									<Text
										mt='2'
										fontSize={12}
										fontWeight='medium'
										color='darkBlue.600'>
										View Details
									</Text>
								)}
							</>
						);
					}}
				</Pressable>

				<Button
					size='sm'
					py='1'
					px='2'
					onPress={() => handlePaymentStatus(id, status)}
					// variant='subtle'
					colorScheme={status == 'Unpaid' ? 'error' : 'lime'}
					_text={{ textTransform: 'capitalize' }}
					leftIcon={<Icon as={Ionicons} name='filter-outline' size='xs' />}>
					{status}
				</Button>
			</Flex>
		</Box>
	);
};

export const AdminItem = ({ admin, navigation }) => {
	const { id, first_name, last_name, username, email } = admin;
	return (
		<Box shadow={1} bg='lightBlue.50' rounded='5' p='3' mb='3' mx='4'>
			<HStack alignItems='center'>
				<Badge
					colorScheme='info'
					_text={{
						color: 'white',
					}}
					variant='solid'
					rounded='4'>
					{`#${id}`}
				</Badge>
				<Spacer />
				<HStack color='coolGray.800' alignItems='center'>
					<Icon as={Ionicons} name='mail-outline' size='xs' mr='1' />
					<Text fontSize={11} color='coolGray.800'>
						{`${first_name} ${last_name}`}
					</Text>
				</HStack>
			</HStack>
			<Text color='coolGray.800' mt='1' fontWeight='medium' fontSize='xl'>
				{username}
			</Text>
			<HStack color='coolGray.800' alignItems='center'>
				<Icon as={Ionicons} name='mail-outline' size='xs' mr='1' />
				<Text fontSize='xs'>{email ? email : 'N/A'}</Text>
			</HStack>
			<Pressable
				onPress={() => navigation.navigate('AdminDetails', { admin: admin })}>
				{({ isHovered, isFocused, isPressed }) => {
					return (
						<Flex justify='flex-end'>
							{isPressed ? (
								<Text
									mt='1'
									ml='auto'
									fontSize={12}
									fontWeight='medium'
									textDecorationLine='underline'
									color='darkBlue.600'
									alignSelf='flex-end'>
									View Details
								</Text>
							) : (
								<Text
									mt='1'
									ml='auto'
									fontSize={12}
									fontWeight='medium'
									color='darkBlue.600'>
									View Details
								</Text>
							)}
						</Flex>
					);
				}}
			</Pressable>
		</Box>
	);
};
