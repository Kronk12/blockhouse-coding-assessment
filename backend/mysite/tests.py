import re
from django.test import TestCase
from django.urls import reverse

class CandlestickDataAPITestCase(TestCase):
    def test_candlestick_data_response_structure(self):
        url = reverse('candlestick-data')
        response = self.client.get(url)
        
        # Ensure the response is 200 OK
        self.assertEqual(response.status_code, 200)
        
        # Parse the JSON response
        data = response.json()
        
        # Check that 'data' is a list
        self.assertIn('data', data)
        self.assertIsInstance(data['data'], list)
        
        # Regex to check the date format (YYYY-MM-DD)
        date_regex = re.compile(r'\d{4}-\d{2}-\d{2}')

        for item in data['data']:
            # Check that each item has the correct keys
            self.assertIn('x', item)
            self.assertIn('open', item)
            self.assertIn('high', item)
            self.assertIn('low', item)
            self.assertIn('close', item)
            
            # Check that 'x' is a valid date
            self.assertTrue(date_regex.match(item['x']))

            # Check numeric values are numbers
            self.assertIsInstance(item['open'], (int, float))
            self.assertIsInstance(item['high'], (int, float))
            self.assertIsInstance(item['low'], (int, float))
            self.assertIsInstance(item['close'], (int, float))

class LineChartDataAPITestCase(TestCase):
    def test_line_chart_data_response_structure(self):
        url = reverse('line-chart-data')
        response = self.client.get(url)
        
        # Ensure the response is 200 OK
        self.assertEqual(response.status_code, 200)
        
        # Parse the JSON response
        data = response.json()

        # Check that 'labels' and 'data' are lists
        self.assertIn('labels', data)
        self.assertIn('data', data)
        self.assertIsInstance(data['labels'], list)
        self.assertIsInstance(data['data'], list)

        # Check labels are strings and data values are numbers
        for label in data['labels']:
            self.assertIsInstance(label, str)
        for item in data['data']:
            self.assertIsInstance(item, (int, float))

class BarChartDataAPITestCase(TestCase):
    def test_bar_chart_data_response_structure(self):
        url = reverse('bar-chart-data')
        response = self.client.get(url)
        
        # Ensure the response is 200 OK
        self.assertEqual(response.status_code, 200)
        
        # Parse the JSON response
        data = response.json()

        # Check that 'labels' and 'data' are lists
        self.assertIn('labels', data)
        self.assertIn('data', data)
        self.assertIsInstance(data['labels'], list)
        self.assertIsInstance(data['data'], list)

        # Check labels are strings and data values are numbers
        for label in data['labels']:
            self.assertIsInstance(label, str)
        for item in data['data']:
            self.assertIsInstance(item, (int, float))

class PieChartDataAPITestCase(TestCase):
    def test_pie_chart_data_response_structure(self):
        url = reverse('pie-chart-data')
        response = self.client.get(url)
        
        # Ensure the response is 200 OK
        self.assertEqual(response.status_code, 200)
        
        # Parse the JSON response
        data = response.json()

        # Check that 'labels' and 'data' are lists
        self.assertIn('labels', data)
        self.assertIn('data', data)
        self.assertIsInstance(data['labels'], list)
        self.assertIsInstance(data['data'], list)

        # Check labels are strings and data values are numbers
        for label in data['labels']:
            self.assertIsInstance(label, str)
        for item in data['data']:
            self.assertIsInstance(item, (int, float))