package Week_1;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class tree_height_3 {
    class FastScanner {
        StringTokenizer tok = new StringTokenizer("");
        BufferedReader in;

        FastScanner() {
            in = new BufferedReader(new InputStreamReader(System.in));
        }

        String next() throws IOException {
            while (!tok.hasMoreElements())
                tok = new StringTokenizer(in.readLine());
            return tok.nextToken();
        }
        int nextInt() throws IOException {
            return Integer.parseInt(next());
        }
    }

    public class TreeHeight {
        int n;
        int parent[];

        void read() throws IOException {
            tree_height_3.FastScanner in = new tree_height_3.FastScanner();
            n = in.nextInt();
            parent = new int[n];
            for (int i = 0; i < n; i++) {
                parent[i] = in.nextInt();
            }
        }

        /* This program finds the maximum depth of a given tree, which is the distance
        *  from the root to the lowest leaf in a tree. The input into the program
         * contains two lines: the first is an integer, n, representing the number of
         * nodes in the tree and the second is a series of n integers that represents
         * the node of which the ith node is a child of (eg. if the 1st number
         * in the second line is a 4, this means that node 0 is a child of node 4.
         * a -1 means that this node is the root node.
         * */
        int computeHeight() {
            // Replace this code with a faster implementation
			/*int maxHeight = 0;
			for (int vertex = 0; vertex < n; vertex++) {
				int height = 0;
				for (int i = vertex; i != -1; i = parent[i])
					height++;
				maxHeight = Math.max(maxHeight, height);
			}*/

			//contains the heights of each node
			int[] heights = new int[n];
			//says whether or not that particular node has been visited
			boolean[] visited = new boolean[n];
            int height = 0;
            int i=0;

            for(int j=0; j<parent.length; j++) {
                i = j;
                height++;
                //traverse the tree up from the jth node
                // to the parent to determine the distance
                // from the jth node to the root
                while(parent[i] != -1) {
                    if(visited[j] == true) {
                        heights[j] = -1;
                        break;
                    }
                    else {
                        height++;
                        i = parent[i];
                        visited[i] = true;
                    }
                }
                heights[j] = height;
                height = 0;
            }

            //loops through the heighs array and finds the maximum height
            return findMaxHeight(heights);
        }

        void printArray(int[] tree) {
            for(int k=0; k<tree.length; k++) {
                System.out.print(tree[k] + " ");
            }
            System.out.println();
        }

        int findMaxHeight(int[] list) {
            int max = -1;
            for(int i=0; i<list.length; i++) {
                if(list[i] > max) {
                    max = list[i];
                }
            }
            return max;
        }
    }

    static public void main(String[] args) throws IOException {
        new Thread(null, new Runnable() {
            public void run() {
                try {
                    new tree_height_3().run();
                } catch (IOException e) {
                }
            }
        }, "1", 1 << 26).start();
    }

    public void run() throws IOException {
        tree_height_3.TreeHeight tree = new tree_height_3.TreeHeight();
        tree.read();
        System.out.println(tree.computeHeight());
    }
}
